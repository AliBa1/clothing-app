'use client';
import {
  mdiChartBox,
  mdiCreditCardOutline,
  mdiListBox,
  mdiStore,
  mdiTshirtCrew,
  mdiViewDashboard
} from '@mdi/js';
import Icon from '@mdi/react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

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
  return (
    <>
      <Link
        href={`/${brandHandle}/dashboard/${route}`}
        className='hidden md:btn-sidebar'
      >
        <Icon path={icon} size={1} />
        {text}
      </Link>

      <Link
        href={`/${brandHandle}/dashboard/${route}`}
        className='flex gap-2 items-center hover:text-accent md:hidden'
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
  return (
    <div className='flex flex-col md:flex-row'>
      {/* Computer sidebar */}
      {/* <div className='sticky top-16 left-0 flex flex-col gap-2 h-screen w-1/4 border-r shadow max-w-xs pt-4 pr-4'> */}

      {/* Mobile sidebar */}
      {/* <div className='sticky top-0 flex flex-row gap-4 w-full border-b shadow p-2 overflow-x-scroll'> */}

      {/* Both */}
      <div className='sticky top-0 md:top-16 md:left-0 flex flex-row md:flex-col gap-8 md:gap-4 md:h-screen w-full md:w-1/4 md:max-w-xs md:border-r shadow p-4 md:pt-4 md:pr-4 overflow-x-scroll md:overflow-x-auto'>
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

      <main className='border'>
        <p className='pb-52'>hhhhhhh</p>
        <p className='pb-52'>hhhhhhh</p>
        <p className='pb-52'>hhhhhhh</p>
        <p className='pb-52'>hhhhhhh</p>
        <p className='pb-52'>hhhhhhh</p>
        <p className='pb-52'>hhhhhhh</p>
        <p className='pb-52'>hhhhhhh</p>
        <p className='pb-52'>hhhhhhh</p>
        <p className='pb-52'>hhhhhhh</p>
        <p className='pb-52'>hhhhhhh</p>
        <p className='pb-52'>hhhhhhh</p>
        {children}
      </main>
    </div>
  );
}
