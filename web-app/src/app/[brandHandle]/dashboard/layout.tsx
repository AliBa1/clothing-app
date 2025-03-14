'use client';
import SlideoverModal from '@/components/SlideoverModal';
import { Brand, mockBrands } from '@/interfaces/brands';
import {
  mdiChevronRight
} from '@mdi/js';
import Icon from '@mdi/react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

// To do:
// Client/server components

function SidebarButton({ text, route }: { text: string; route: string }) {
  const brandHandle = usePathname().split('/')[1];
  const currentRoute = usePathname().split('/')[3] || '';

  return (
    <>
      <Link
        href={`/${brandHandle}/dashboard/${route}`}
        className={`flex gap-2 items-center ${
          currentRoute === route && 'text-accent'
        }`}
      >
        {text}
      </Link>
    </>
  );
}

export default function BrandDashboardLayout({
  children
}: {
  children: React.ReactNode;
}) {
  const brandHandle: string = usePathname().split('/')[1];
  const brand: Brand =
    mockBrands.find((b) => b.handle === brandHandle) || mockBrands[0];
  // const [brand, setBrand] = useState<Brand>(
  //   mockBrands.find((b) => b.handle === brandHandle) || mockBrands[0]
  // );
  const [isSwitcherOpen, setIsSwitcherOpen] = useState<boolean>(false);
  return (
    <div className='flex flex-col'>
      <div className='md:sticky top-16 bg-background flex gap-8 border-primary shadow p-4 overflow-x-auto'>
        {/* Open brand switcher modal */}
        <button
          className='btn-sidebar justify-between'
          onClick={() => setIsSwitcherOpen(true)}
        >
          <p className='truncate'>{brand.name}</p>
          <Icon path={mdiChevronRight} size={1} />
        </button>

        <div className='border-r md:border-b border-primary'></div>

        {/* if route matches button update styling to reflect that */}
        <SidebarButton text='Dashboard' route='' />
        <SidebarButton text='Products' route='products' />
        <SidebarButton text='Orders' route='orders' />
        <SidebarButton text='Analytics' route='analytics' />
        <SidebarButton text='Payment' route='payment' />
        <SidebarButton text='Brand' route='brand' />
      </div>

      {/* <main className='p-4 w-full md:w-3/4 overflow-x-clip'>{children}</main> */}
      <main className='p-4 w-full'>{children}</main>

      <SlideoverModal
        isOpen={isSwitcherOpen}
        onClose={() => setIsSwitcherOpen(false)}
        lockedWidth={false}
      >
        <h6 className='mb-2'>Select a Brand</h6>
        <div className='flex flex-col gap-4'>
          {mockBrands.map((b) => (
            <Link
              key={b.id}
              href={`/${b.handle}/dashboard`}
              className='btn-sidebar'
            >
              {b.name}
              <Icon path={mdiChevronRight} size={1} />
            </Link>
          ))}
        </div>
      </SlideoverModal>
    </div>
  );
}
