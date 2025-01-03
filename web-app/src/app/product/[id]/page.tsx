'use client';

import { mockProducts } from '@/interfaces/products';
import Image from 'next/image';
import { use, useState } from 'react';

export default function ProductPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  const product = mockProducts.find((p) => p.id === Number(id));
  const [selectedSize, setSelectedSize] = useState<string>('');

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
        <p className='text-2xl font-bold'>${product?.price}</p>
        <br></br>
        <div className='text-xl mb-4'>
          <p>Color </p>
        </div>
        <div className='text-xl'>
          <p>Size</p>
          <div className='flex flex-wrap gap-4'>
            {product?.variants.map((v) => (
              <button
                key={`${v.size}-${v.color}`}
                className={`btn-square ${selectedSize === v.size && 'bg-primary text-secondary'}`}
                onClick={() => setSelectedSize(v.size)}
              >
                {v.size}
              </button>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
