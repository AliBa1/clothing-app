'use client';

import { ColorVariant, Discount, mockProducts } from '@/interfaces/products';
import Image from 'next/image';
import { use, useState } from 'react';

export default function ProductPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  const product = mockProducts.find((p) => p.id === id);
  const [selectedColor, setSelectedColor] = useState<ColorVariant>(
    product?.colors[0] || { colorName: '', price: 1, coverImg: '', sizes: [] }
  );
  const [selectedSize, setSelectedSize] = useState<string>('');

  function discountedPrice(price: number, discount: Discount): number {
    if (discount.type === 'fixed') {
      return price - (price * discount.amount) / 100;
    } else {
      return price - discount.amount;
    }
  }

  return (
    <main className='flex-row'>
      <div className='flex flex-col w-1/2 h-full px-4 border'></div>
      <div className='flex flex-col w-1/2 h-full px-8 border overflow-y-scroll'>
        <div className='flex items-center'>
          {product && (
            <Image
              src={product.brand.logo}
              alt={product.brand.name}
              height={500}
              width={500}
              loading='lazy'
              style={{ backgroundColor: 'white' }}
              className='aspect-square h-16 w-16 rounded-full'
            />
          )}
          {/* link to brand page vvvvvvv */}
          <p className='text-xl px-4'>{product?.brand.name}</p>
        </div>
        <p className='text-2xl font-bold'>{product?.name}</p>
        {selectedColor.discount ? (
          <p className='text-2xl font-bold'>
            ${discountedPrice(selectedColor.price, selectedColor.discount)}{' '}
            <span className='line-through'>${selectedColor.price}</span>
          </p>
        ) : (
          <p className='text-2xl font-bold'>${selectedColor.price}</p>
        )}
        <br></br>
        <div className='text-xl mb-4'>
          <p>
            Color &middot; <span className='text-accent'>{selectedColor.colorName}</span>
          </p>
          <div className='flex flex-wrap gap-4 mt-2'>
            {product?.colors.map((c) => (
              <Image
                key={c.colorName}
                alt={c.colorName}
                width={500}
                height={500}
                src={c.coverImg}
                className={`img-button ${selectedColor === c && 'border-4 border-accent'}`}
                onClick={() => setSelectedColor(c)}
              />
            ))}
          </div>
        </div>
        <div className='text-xl'>
          <p>
            Size &middot; <span className='text-accent'>{selectedSize}</span>
          </p>
          <div className='flex flex-wrap gap-4 mt-2'>
            {selectedColor.sizes.map((s) => (
              <button
                key={s.size}
                className={`btn-square ${selectedSize === s.size && 'bg-primary text-secondary'}`}
                onClick={() => setSelectedSize(s.size)}
                disabled={s.quantity === 0 ? true : false}
              >
                {s.size}
              </button>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
