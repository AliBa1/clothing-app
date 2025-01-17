'use client';

import ProductCard from '@/components/ProductCard';
import { mockBrands } from '@/interfaces/brands';
import { mockProducts } from '@/interfaces/products';
import { mdiCheck, mdiPlus } from '@mdi/js';
import Icon from '@mdi/react';
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
        <h3 className='text-xl md:text-3xl'>{brand?.name}</h3>
        <p className='whitespace-normal text-center text-sm md:text-base w-full md:w-1/2'>{brand?.bio}</p>
        <div className='flex gap-8'>
          {brand?.links.instagram && (
            <a
              href={brand.links.instagram}
              target='_blank'
              rel='noopener noreferrer'
            >
              <Image
                src={'/social-media-icons/Instagram_Glyph_Gradient.png'}
                alt='Instagram'
                width={100}
                height={100}
                className='w-8 h-8 aspect-square'
              />
            </a>
          )}

          {brand?.links.youtube && (
            <a
              href={brand.links.youtube}
              target='_blank'
              rel='noopener noreferrer'
            >
              <Image
                src={'/social-media-icons/YouTube Vector Icon.svg'}
                alt='YouTube'
                width={100}
                height={100}
                className='w-8 h-8 aspect-square'
              />
            </a>
          )}

          {brand?.links.tiktok && (
            <a
              href={brand.links.tiktok}
              target='_blank'
              rel='noopener noreferrer'
            >
              <Image
                src={'/social-media-icons/TikTok_Icon_Black_Circle.png'}
                alt='TikTok'
                width={100}
                height={100}
                className='w-8 h-8 aspect-square'
              />
            </a>
          )}
        </div>
        <div className='flex gap-4 mt-8'>
          {/* update to match if user is following or not */}
          <button className='secondary-btn flex items-center gap-2'>Follow <Icon path={mdiPlus} size={1}/></button>
          <button className='primary-btn flex items-center gap-2'>Following <Icon path={mdiCheck} size={1}/></button>
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
