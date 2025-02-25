'use client';
import SlideoverModal from '@/components/SlideoverModal';
import { Brand, mockBrands } from '@/interfaces/brands';
import {
  mdiChartBox,
  mdiChevronRight,
  mdiCreditCardOutline,
  mdiListBox,
  mdiStore,
  mdiTshirtCrew,
  mdiViewDashboard
} from '@mdi/js';
import Icon from '@mdi/react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

function SidebarButton({
  text,
  icon,
  route
}: {
  text: string;
  icon: string;
  route: string;
}) {
  const brandHandle = usePathname().split('/')[1];
  const currentRoute = usePathname().split('/')[3] || '';
  return (
    <>
      {/* Computer link */}
      <Link
        href={`/${brandHandle}/dashboard/${route}`}
        className={`hidden md:btn-sidebar ${
          currentRoute === route && 'bg-secondary'
        }`}
      >
        <Icon path={icon} size={1} />
        {text}
      </Link>

      {/* Mobile link */}
      <Link
        href={`/${brandHandle}/dashboard/${route}`}
        className={`flex gap-2 items-center md:hidden ${
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
    <div className='flex flex-col md:flex-row'>
      {/* Computer sidebar */}
      {/* <div className='sticky top-16 left-0 flex flex-col gap-2 h-screen w-1/4 border-r shadow max-w-xs pt-4 pr-4'> */}

      {/* Mobile sidebar */}
      {/* <div className='sticky top-0 flex flex-row gap-4 w-full border-b shadow p-2 overflow-x-scroll'> */}

      {/* Both */}
      <div className='sticky top-0 md:top-16 md:left-0 flex flex-row md:flex-col gap-8 md:gap-4 md:h-screen w-full md:w-1/4 md:max-w-xs md:border-r shadow p-4 md:pt-4 md:pr-4 overflow-x-scroll md:overflow-x-auto'>
        <Image
          src={brand.logo}
          alt={brand.name}
          height={100}
          width={100}
          loading='lazy'
          style={{ backgroundColor: 'white' }}
          className='hidden md:block aspect-square rounded-full border mx-auto'
        />
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
        <SidebarButton text='Dashboard' icon={mdiViewDashboard} route='' />
        <SidebarButton text='Products' icon={mdiTshirtCrew} route='products' />
        <SidebarButton text='Orders' icon={mdiListBox} route='orders' />
        <SidebarButton text='Analytics' icon={mdiChartBox} route='analytics' />
        <SidebarButton
          text='Payment'
          icon={mdiCreditCardOutline}
          route='payment'
        />
        <SidebarButton text='Brand' icon={mdiStore} route='brand' />
      </div>

      <main className='p-4 w-full md:w-3/4 overflow-x-clip'>{children}</main>

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
