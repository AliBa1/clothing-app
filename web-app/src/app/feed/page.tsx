'use client';
import BrandLink from '@/components/BrandLink';
import Modal from '@/components/Modal';
import WideProductCard from '@/components/WideProductCard';
import { mockBrands } from '@/interfaces/brands';
import { mockProducts } from '@/interfaces/brandProducts';
import { useState } from 'react';

export default function FeedPage() {
  const [isFollowingOpen, setFollowingOpen] = useState<boolean>(false);
  // user context

  return (
    // <main className='flex-col md:flex-row w-full px-0 md:px-4 gap-4 items-start'>
    //   {/* Mobile following section */}
    //   <div className='bg-background w-full flex flex-col md:hidden sticky top-16 p-2 gap-2'>
    //     <p className='underline font-heading'>Following</p>
    //     <div className='flex w-full overflow-x-scroll gap-4'>
    //       {mockBrands.map((b) => (
    //         <BrandLink key={b.id} brand={b} size='normal' isFlexCol={true} />
    //       ))}
    //     </div>
    //   </div>
    //   {/* Web following section */}
    //   <div
    //     className='hidden md:flex flex-col gap-4 max-w-1/5 pr-4 sticky top-16 left-0 h-screen overflow-y-scroll'
    //     style={{ scrollbarWidth: 'none' }}
    //   >
    //     <h4 className='underline text-xl lg:text-2xl'>Following</h4>
    //     {mockBrands.map((b) => (
    //       <BrandLink key={b.id} brand={b} size='normal' />
    //     ))}
    //   </div>
    //   <div className='flex flex-col gap-8 md:py-8 px-2 md:px-0 w-full md:w-4/5'>
    //     {mockProducts.map((product) => (
    //       <WideProductCard key={product.id} product={product} />
    //     ))}
    //   </div>
    // </main>

    // V2_V2_V2_V2_V2_V2_V2_V2_V2_V2_V2_V2_V2_V2_V2_V2_V2_V2
    <main className='flex-col w-full px-0 md:px-4 gap-4 justify-center overflow-x-clip'>
      <div className='hidden md:flex gap-4 justify-center py-4 bg-background w-screen sticky top-16 font-light'>
        <button className='btn-accent' onClick={() => setFollowingOpen(true)}>
          Following
        </button>
      </div>

      <div className='flex flex-col gap-8 py-4 px-2 md:px-0 w-full lg:w-2/3'>
        {mockProducts.map((product) => (
          <WideProductCard key={product.id} product={product} />
        ))}
      </div>

      <div className='md:hidden flex gap-4 justify-center py-2 bg-background w-screen sticky bottom-0 font-light'>
        <button className='btn-accent' onClick={() => setFollowingOpen(true)}>
          Following
        </button>
      </div>

      {/* Following modal (better than following sitting on the side) */}
      <Modal isOpen={isFollowingOpen} onClose={() => setFollowingOpen(false)} lockedWidth={false}>
        <h4 className='text-xl lg:text-2xl text-center sticky top-0 bg-background'>
          Following
        </h4>
        {mockBrands.map((b) => (
          <BrandLink key={b.id} brand={b} size='big' />
        ))}
      </Modal>
    </main>
  );
}
