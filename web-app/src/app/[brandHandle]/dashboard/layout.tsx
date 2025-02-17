import {
  mdiChartBox,
  mdiCreditCardOutline,
  mdiListBox,
  mdiStore,
  mdiTshirtCrew,
  mdiViewDashboard
} from '@mdi/js';
import Icon from '@mdi/react';

function SidebarButton({ text, icon }: { text: string; icon: string }) {
  return (
    <>
      <button className='hidden md:btn-sidebar'>
        <Icon path={icon} size={1} />
        {text}
      </button>

      <button className='flex gap-2 items-center hover:text-accent md:hidden'>
        {text}
      </button>
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
        <SidebarButton text='Dashboard' icon={mdiViewDashboard} />
        <SidebarButton text='Products' icon={mdiTshirtCrew} />
        <SidebarButton text='Orders' icon={mdiListBox} />
        <SidebarButton text='Analytics' icon={mdiChartBox} />
        <SidebarButton text='Payment' icon={mdiCreditCardOutline} />
        <SidebarButton text='Brand' icon={mdiStore} />
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
