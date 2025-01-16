'use client';

import ImageCarousel from '@/components/ImageCarousel';
import { ColorVariant, mockProducts } from '@/interfaces/products';
import { discountedPrice } from '@/utils/helperFunctions';
import { mdiHeartOutline } from '@mdi/js';
import Icon from '@mdi/react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { use, useState } from 'react';

export default function ProductPage({
  params
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = use(params);
  const router = useRouter();
  const product = mockProducts.find((p) => p.id === id);
  const [selectedColor, setSelectedColor] = useState<ColorVariant>(
    product?.colors[0] || {
      colorName: '',
      price: 1,
      images: { cover: '' },
      sizes: []
    }
  );
  const [selectedSize, setSelectedSize] = useState<string>('');
  const allImages = selectedColor.images.additional
    ? [selectedColor.images.cover].concat(selectedColor.images.additional)
    : [selectedColor.images.cover];

  return (
    <main className='md:flex-row items-start gap-4 md:gap-0 mt-8'>
      <div className='flex flex-col md:sticky md:top-16 w-full md:w-1/2 px-4 items-center'>
        <ImageCarousel images={allImages} alt={product?.name} />
      </div>
      <div className='flex flex-col w-full md:w-1/2 h-auto md:h-full px-2 md:px-8'>
        <div className='flex items-center justify-center md:justify-normal'>
          {product && (
            <>
              <Image
                src={product.brand.logo}
                alt={product.brand.name}
                height={500}
                width={500}
                loading='lazy'
                style={{ backgroundColor: 'white' }}
                className='aspect-square h-8 w-8 md:h-16 md:w-16 rounded-full border cursor-pointer peer'
                onClick={() => router.push(`/brand/${product.brand.id}`)}
              />
              <p
                className='text-base md:text-xl px-4 hover:underline peer-hover:underline cursor-pointer'
                onClick={() => router.push(`/brand/${product.brand.id}`)}
              >
                {product.brand.name}
              </p>
            </>
          )}
        </div>
        <h3 className='text-center md:text-start text-2xl md:text-3xl'>
          {product?.name}
        </h3>
        {selectedColor.discount ? (
          <h3 className='text-center md:text-start text-xl md:text-3xl'>
            ${discountedPrice(selectedColor.price, selectedColor.discount)}{' '}
            <span className='line-through text-accent'>
              ${selectedColor.price}
            </span>
          </h3>
        ) : (
          <h3 className='text-center md:text-start text-2xl md:text-3xl'>
            ${selectedColor.price}
          </h3>
        )}
        <br></br>
        <div className='text-base md:text-xl mb-4'>
          <p>
            Color &middot;{' '}
            <span className='text-accent'>{selectedColor.colorName}</span>
          </p>
          {product?.colorNotes && (
            <p className='text-base text-gray-400'>{product?.colorNotes}</p>
          )}
          <div className='flex flex-wrap gap-4 mt-2'>
            {product?.colors.map((c) => (
              <button
                key={c.colorName}
                onClick={() => {
                  setSelectedColor(c);
                  if (
                    c.sizes.find((s) => selectedSize === s.size)?.quantity ===
                      0 ||
                    !c.sizes.find((s) => selectedSize === s.size)
                  ) {
                    setSelectedSize('');
                  }
                }}
              >
                <Image
                  alt={c.colorName}
                  width={500}
                  height={500}
                  src={c.images.cover}
                  style={{ backgroundColor: 'white' }}
                  className={`img-button bg-gray-300 ${
                    selectedColor === c && 'border-4 border-accent'
                  }`}
                />
              </button>
            ))}
          </div>
        </div>
        <div className='text-base md:text-xl mb-4'>
          <p>
            Size &middot; <span className='text-accent'>{selectedSize}</span>
          </p>
          {product?.sizeNotes && (
            <p className='text-base text-gray-400'>{product?.sizeNotes}</p>
          )}
          <div className='flex flex-wrap gap-4 mt-2'>
            {selectedColor.sizes.map((s) => (
              <button
                key={s.size}
                className={`btn-square text-xl ${
                  selectedSize === s.size && 'bg-primary text-secondary'
                }`}
                onClick={() => setSelectedSize(s.size)}
                disabled={s.quantity === 0 ? true : false}
              >
                {s.size}
              </button>
            ))}
          </div>
        </div>
        <br></br>
        <div className='flex flex-col gap-4'>
          <button className='primary-btn h-12 md:h-16 w-full'>
            Add to Cart
          </button>
          <button className='secondary-btn h-12 md:h-16 w-full flex flex-nowrap items-center justify-center gap-2'>
            Save <Icon path={mdiHeartOutline} size={1.5} />
          </button>
        </div>
        <br></br>
        {product?.description && (
          <div className='text-base md:text-xl'>
            <p>Description</p>
            <p className='text-gray-400 whitespace-pre-line'>
              {product?.description}
            </p>
          </div>
        )}
        <br></br>
        {product?.shipping && (
          <div className='text-base md:text-xl'>
            <p>Shipping</p>
            <p className='text-gray-400 whitespace-pre-line'>
              {product?.shipping}
            </p>
          </div>
        )}
        <br></br>
        {product?.returns && (
          <div className='text-base md:text-xl'>
            <p>Returns</p>
            <p className='text-gray-400 whitespace-pre-line'>
              {product?.returns}
            </p>
          </div>
        )}
      </div>
    </main>
  );
}
