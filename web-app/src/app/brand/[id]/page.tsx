'use client';

import ProductCard from '@/components/ProductCard';
import { mockBrands } from '@/interfaces/brands';
import { mockProducts } from '@/interfaces/products';
import Image from 'next/image';
import { use } from 'react';

export default function BrandPage({
  params
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = use(params);
  const brand = mockBrands.find((b) => b.id === id);
  const products = mockProducts.filter((p) => p.brand.id === id);

  return (
    <main>
      <div className='mt-8 flex flex-col items-center'>
        <Image
          src={brand?.logo || ''}
          className='aspect-square object-cover h-16 w-16 md:h-32 md:w-32 rounded-full border'
          style={{ backgroundColor: 'white' }}
          alt={`${brand?.name} Logo`}
          height={500}
          width={500}
          loading='lazy'
        />
        <h3>{brand?.name}</h3>
        <p className=''>This is the brand bio. We are a great brand founded in 1989. We offfer high quality and service.</p>
        <div className='flex gap-4 mt-8'>
          <button className='primary-btn'>Follow</button>
          <button className='primary-btn'>Contact</button>
        </div>
      </div>
      <div className='grid grid-cols-3 lg:grid-cols-4 gap-4 md:gap-8 px-2 my-8'>
        {products.map((product) => (
          <ProductCard key={product.id} product={product} showBrand={false} />
        ))}
      </div>
    </main>
  );
}
