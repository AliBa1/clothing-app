'use client';

import BrandLink from '@/components/BrandLink';
import ImageCarousel from '@/components/ImageCarousel';
import {
  ColorVariant,
  mockProducts,
  SizeVariant
} from '@/interfaces/brandProducts';
import { savedProducts } from '@/interfaces/userProducts';
import { discountedPrice } from '@/utils/helperFunctions';
import { mdiHeart, mdiHeartOutline } from '@mdi/js';
import Icon from '@mdi/react';
import Image from 'next/image';
import {
  notFound,
  usePathname,
  useRouter,
  useSearchParams
} from 'next/navigation';
import { use, useCallback, useEffect, useState } from 'react';

// To do:
// working buttons
// user server components for SEO
// make size and color in client components

export default function ProductPage({
  params
}: {
  params: Promise<{ productSlug: string; id: string }>;
}) {
  const { productSlug, id } = use(params);
  const product = mockProducts.find((p) => p.id === id);
  if (product === undefined || productSlug !== product.productSlug) {
    notFound();
  }

  const router = useRouter();
  const pathname = usePathname();
  const optionsParams = useSearchParams();
  const colorParam = optionsParams.get('color');
  const sizeParam = optionsParams.get('size');
  const [selectedColor, setSelectedColor] = useState<ColorVariant>(
    product.colors.find((c) => c.colorName === colorParam) ||
      product?.colors[0] || {
        colorName: '',
        price: 1,
        images: { cover: '' },
        sizes: []
      }
  );
  const [colorId, setColorId] = useState<string>(
    product.colors.find((c) => c.colorName === colorParam)?.id ||
      product?.colors[0].id
  );
  const [saved, setSaved] = useState<boolean>(
    savedProducts.some((sP) => sP.color.id === colorId)
  );
  const [selectedSize, setSelectedSize] = useState<string>(
    selectedColor.sizes.find((s) => s.size === sizeParam)?.size || ''
  );
  const allImages = selectedColor.images.additional
    ? [selectedColor.images.cover].concat(selectedColor.images.additional)
    : [selectedColor.images.cover];

  useEffect(() => {
    if (savedProducts.some((sP) => sP.color.id === colorId)) {
      setSaved(true);
    } else {
      setSaved(false);
    }
  }, [colorId]);

  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(optionsParams.toString());
      params.set(name, value);

      return params.toString();
    },
    [optionsParams]
  );

  function handleColorSelect(c: ColorVariant) {
    setSelectedColor(c);
    setColorId(c.id);
    router.push(`${pathname}?${createQueryString('color', c.colorName)}`, {
      scroll: false
    });
    if (
      c.sizes.find((s) => selectedSize === s.size)?.quantity === 0 ||
      !c.sizes.find((s) => selectedSize === s.size)
    ) {
      setSelectedSize('');
    }
  }

  function handleSizeSelect(s: SizeVariant) {
    setSelectedSize(s.size);
    router.push(`${pathname}?${createQueryString('size', s.size)}`, {
      scroll: false
    });
  }

  return (
    <main className='md:flex-row items-start gap-4 md:gap-0 mt-8 overflow-x-clip'>
      <div className='flex flex-col md:sticky md:top-16 w-full md:w-1/2 px-4 items-center'>
        <ImageCarousel images={allImages} alt={product?.name} />
      </div>
      <div className='flex flex-col w-full md:w-1/2 h-auto md:h-full px-2 md:px-8'>
        <div className='flex items-center justify-center md:justify-normal'>
          {product && <BrandLink brand={product.brand} size={'big'} />}
        </div>
        <h3 className='text-center md:text-start text-2xl lg:text-3xl'>
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
            Color <span>{selectedColor && '·'}</span>{' '}
            <span className='text-accent'>{selectedColor.colorName}</span>
          </p>
          <div className='flex flex-wrap gap-4 mt-2'>
            {product?.colors.map((c) => (
              <button key={c.colorName} onClick={() => handleColorSelect(c)}>
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
            Size {selectedSize && '· '}
            <span className='text-accent'>{selectedSize}</span>
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
                onClick={() => handleSizeSelect(s)}
                disabled={s.quantity === 0 ? true : false}
              >
                {s.size}
              </button>
            ))}
          </div>
        </div>
        <br></br>
        <div className='flex flex-col gap-4'>
          <button className='btn-primary h-12 md:h-16 w-full'>
            Add to Cart
          </button>
          <button className='btn-secondary h-12 md:h-16 w-full flex flex-nowrap items-center justify-center gap-2'>
            {saved ? 'Saved' : 'Save'}{' '}
            <Icon path={saved ? mdiHeart : mdiHeartOutline} size={1.5} />
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
