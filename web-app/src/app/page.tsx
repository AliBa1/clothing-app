import ProductBannerCompact from '@/components/ProductBannerCompact';
import ProductBannerWide from '@/components/ProductBannerWide';
import { mockProducts } from '@/interfaces/brandProducts';

export default function Home() {
  return (
    <main className='p-0'>
      <div className='hidden lg:block w-full'>
        <ProductBannerWide product={mockProducts[0]} />
      </div>

      <div className='lg:hidden block w-full'>
        <ProductBannerCompact product={mockProducts[0]} />
      </div>

      <div className='flex flex-col lg:flex-row w-full'>
        <ProductBannerCompact
          product={mockProducts[1]}
          colorVariant={mockProducts[1].colors[2]}
        />
        <ProductBannerCompact
          product={mockProducts[2]}
          colorVariant={mockProducts[2].colors[4]}
        />
      </div>
    </main>
  );
}
