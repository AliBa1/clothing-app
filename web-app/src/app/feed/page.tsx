'use client';
import BrandLink from '@/components/BrandLink';
import WideProductCard from '@/components/WideProductCard';
import { mockBrands } from '@/interfaces/brands';
import { mockProducts } from '@/interfaces/products';

export default function FeedPage() {
  // user context

  return (
    <main className='flex-col md:flex-row w-full px-0 md:px-4 gap-4 items-start'>
      <div className='bg-background w-full flex flex-col md:hidden sticky top-16 p-2 gap-2'>
        <p className='underline font-heading'>Following</p>
        <div className='flex w-full overflow-x-scroll gap-4'>
          {mockBrands.map((b) => (
            <BrandLink key={b.id} brand={b} size='normal' isFlexCol={true} />
          ))}
        </div>
      </div>
      <div className='hidden md:flex flex-col gap-4 w-1/5 sticky top-16 left-0'>
        <h4 className='underline'>Following</h4>
        {mockBrands.map((b) => (
          <BrandLink key={b.id} brand={b} size='normal' />
        ))}
      </div>
      <div className='flex flex-col gap-8 md:py-8 px-2 md:px-0 w-full md:w-4/5'>
        {mockProducts.map((product) => (
          <WideProductCard key={product.id} product={product} />
        ))}
      </div>
    </main>
  );
}
