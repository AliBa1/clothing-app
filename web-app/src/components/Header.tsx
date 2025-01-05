'use client';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Icon from '@mdi/react';
import { mdiAccount, mdiCart, mdiHeartOutline, mdiMagnify } from '@mdi/js';

export default function Header() {
  const pathname = usePathname();
  return (
    <header className='sticky top-0 z-10 bg-background grid grid-cols-3 items-center px-8 py-2'>
      <nav className='flex gap-8'>
        <Link href='/shop' className={`hover:underline decoration-accent ${pathname === '/shop' ? 'text-accent' : ''}`}>
          Shop
        </Link>
        <Link href='/' className={`hover:underline decoration-accent ${pathname === '/popular' ? 'text-accent' : ''}`}>
          Popular
        </Link>
        <Link href='/' className={`hover:underline decoration-accent ${pathname === '/feed' ? 'text-accent' : ''}`}>
          Feed
        </Link>
      </nav>

      <Link href='/' className='place-items-center'>
        <h6>SiTENAMË</h6>
      </Link>

      <div className='flex gap-8 place-content-end'>
        <button aria-label='Search' title='Search'>
          <Icon path={mdiMagnify} size={1} />
        </button>
        <button aria-label='Saved' title='Saved'>
          <Icon path={mdiHeartOutline} size={1} />
        </button>
        <button aria-label='Account' title='Account'>
          <Icon path={mdiAccount} size={1} />
        </button>

        <button aria-label='Cart' title='Cart'>
          <div className='relative'>
            <Icon path={mdiCart} size={1} />
            <div className='absolute -top-1 -right-1 bg-accent rounded-full p-1 text-center text-xs' />
          </div>
        </button>
      </div>
    </header>
  );
}
//
// Custom Tooltip:
{
  /* <div className='flex flex-col items-center'>
  <Icon className='cursor-pointer peer' path={mdiMagnify} size={1} />
  <div className='invisible peer-hover:visible inline-block opacity-0 peer-hover:opacity-50 peer-hover:transition-opacity peer-hover:delay-1000 absolute z-10 bg-primary text-secondary mt-8 text-base px-2 py-1 rounded'>
    Search
  </div>
</div> */
}
//
//
// Header Dropdown
{
  /* <div className='hidden group-hover:flex hover:flex gap-8 absolute -left-8 top-10 px-8 border-y py-2' style={{ width: "calc(100vw - 1rem)" }}>
<p>Hoodies</p>
<p>Shirts</p>
<p>Pants</p>
<p>Shorts</p>
<p>Shoes</p>
</div> */
}
