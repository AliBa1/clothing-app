import { mdiChartBox, mdiCreditCardOutline, mdiListBox, mdiStore, mdiTshirtCrew, mdiViewDashboard } from '@mdi/js';
import Icon from '@mdi/react';

export default function BrandDashboardLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <div className='flex flex-row'>
      {/* Computer sidebar */}
      <div className='sticky top-16 left-0 flex flex-col gap-2 h-screen w-1/4 border-r shadow max-w-xs pt-4 pr-4'>
        <button className='btn-sidebar'>
          <Icon path={mdiViewDashboard} size={1} />
          Dashboard
        </button>

        <button className='btn-sidebar'>
          <Icon path={mdiTshirtCrew} size={1} />
          Products
        </button>

        <button className='btn-sidebar'>
          <Icon path={mdiListBox} size={1} />
          Orders
        </button>

        <button className='btn-sidebar'>
          <Icon path={mdiChartBox} size={1} />
          Analytics
        </button>

        <button className='btn-sidebar'>
          <Icon path={mdiCreditCardOutline} size={1} />
          Payment
        </button>

        <button className='btn-sidebar'>
          <Icon path={mdiStore} size={1} />
          Brand
        </button>
      </div>

      {/* Mobile sidebar */}

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
