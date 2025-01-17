'use client';
import BrandLink from '@/components/BrandLink';
import WideProductCard from '@/components/WideProductCard';
import { mockBrands } from '@/interfaces/brands';
import { mockProducts } from '@/interfaces/products';

export default function FeedPage() {
  // user context

  return (
    <main className='flex-row w-full px-4 gap-4 items-start'>
      {/* <h1>Feed Page</h1> */}
      <div className='w-1/5 sticky top-16 left-0'>
        <h4 className='underline'>Following</h4>
        {mockBrands.map((b) => (
          <BrandLink key={b.id} brand={b} size='big' />
        ))}
      </div>
      <div className='flex flex-col gap-8 py-8 w-4/5'>
        {mockProducts.map((product) => (
          <WideProductCard key={product.id} product={product} />
        ))}
      </div>
    </main>
  );
}
