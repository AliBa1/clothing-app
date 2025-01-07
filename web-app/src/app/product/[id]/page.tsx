'use client';

import { ColorVariant, mockProducts } from '@/interfaces/products';
import { discountedPrice } from '@/utils/helperFunctions';
import { mdiHeartOutline } from '@mdi/js';
import Icon from '@mdi/react';
import Image from 'next/image';
import { use, useState } from 'react';

export default function ProductPage({
  params
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = use(params);
  const product = mockProducts.find((p) => p.id === id);
  const [selectedColor, setSelectedColor] = useState<ColorVariant>(
    product?.colors[0] || { colorName: '', price: 1, images: {cover: ''}, sizes: [] }
  );
  const [selectedSize, setSelectedSize] = useState<string>('');

  return (
    <main className='flex-row'>
      <div className='flex flex-col items-center w-1/2 h-full px-4'>
        <Image
          src={selectedColor.images.cover || ''}
          alt={selectedColor.images.cover || 'Loading Image'}
          height={1280}
          width={1024}
          style={{ backgroundColor: 'lightgray' }}
          className='aspect-[4/5] rounded object-cover object-center'
        />
      </div>
      <div className='flex flex-col w-1/2 h-full px-8'>
        <div className='flex items-center'>
          {product && (
            <Image
              src={product.brand.logo}
              alt={product.brand.name}
              height={500}
              width={500}
              loading='lazy'
              style={{ backgroundColor: 'white' }}
              className='aspect-square h-16 w-16 rounded-full border'
            />
          )}
          {/* link to brand page vvvvvvv */}
          <p className='text-xl px-4'>{product?.brand.name}</p>
        </div>
        {/* <p className='text-2xl font-bold'>{product?.name}</p> */}
        <h3>{product?.name}</h3>
        {selectedColor.discount ? (
          <h3 className='text-2xl font-bold'>
            ${discountedPrice(selectedColor.price, selectedColor.discount)}{' '}
            <span className='line-through text-accent'>
              ${selectedColor.price}
            </span>
          </h3>
        ) : (
          <h3>${selectedColor.price}</h3>
        )}
        <br></br>
        <div className='text-xl mb-4'>
          <p>
            Color &middot;{' '}
            <span className='text-accent'>{selectedColor.colorName}</span>
          </p>
          {product?.colorNotes && (
            <p className='text-base text-gray-400'>{product?.colorNotes}</p>
          )}
          <div className='flex flex-wrap gap-4 mt-2'>
            {product?.colors.map((c) => (
              <Image
                key={c.colorName}
                alt={c.colorName}
                width={500}
                height={500}
                src={c.images.cover}
                className={`img-button bg-gray-300 ${
                  selectedColor === c && 'border-4 border-accent'
                }`}
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
              />
            ))}
          </div>
        </div>
        <div className='text-xl'>
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
                className={`btn-square ${
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
          <button className='primary-btn h-16 w-full'>Add to Cart</button>
          <button className='secondary-btn h-16 w-full flex flex-nowrap items-center justify-center gap-2'>
            Save <Icon path={mdiHeartOutline} size={1.5} />
          </button>
        </div>
        <br></br>
        {product?.description && (
          <div>
            <p className='text-xl'>Description</p>
            <p className='text-xl text-gray-400 whitespace-pre-line'>
              {product?.description}
            </p>
          </div>
        )}
        <br></br>
        {product?.shipping && (
          <div>
            <p className='text-xl'>Shipping</p>
            <p className='text-xl text-gray-400 whitespace-pre-line'>
              {product?.shipping}
            </p>
          </div>
        )}
        <br></br>
        {product?.returns && (
          <div>
            <p className='text-xl'>Returns</p>
            <p className='text-xl text-gray-400 whitespace-pre-line'>
              {product?.returns}
            </p>
          </div>
        )}
      </div>
    </main>
  );
}
