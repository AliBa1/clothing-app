'use client';
import { BrandProduct } from '@/interfaces/brandProducts';
import ProductCard from './ProductCard';
import Link from 'next/link';

interface BannerProps {
  name: string;
  route: string;
  products: BrandProduct[];
}

export default function FeaturedBannerWide({
  name,
  route,
  products
}: BannerProps) {
  return (
    <div className='w-full flex flex-col gap-4 md:gap-8 items-center text-center p-8'>
      <h3 className='text-xl md:text-3xl'>Featured {name}</h3>

      <div className='flex flex-col md:flex-row gap-4 md:gap-8 py-4'>
        {products.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>

      <Link href={route} className='btn-accent'>
        Shop All {name}
      </Link>
    </div>
  );
}
