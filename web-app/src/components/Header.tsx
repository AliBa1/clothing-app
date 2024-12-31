'use client';
import Image from 'next/image';
import Icon from '@mdi/react';
import { mdiAccount, mdiCart, mdiHeartOutline, mdiMagnify } from '@mdi/js';
import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
  const [shopHover, setShopHover] = useState(false);
  return (
    <header className='sticky top-0 z-10 bg-background flex justify-between items-center px-8 py-2'>
      <div className='flex gap-8'>
        <div className='relative group'>
          <Link href='/' className='hover:underline decoration-accent'>
            Shop
          </Link>
          {/* <div className='hidden group-hover:flex hover:flex gap-8 absolute -left-8 top-10 px-8 border-y py-2' style={{ width: "calc(100vw - 1rem)" }}>
            <p>Hoodies</p>
            <p>Shirts</p>
            <p>Pants</p>
            <p>Shorts</p>
            <p>Shoes</p>
          </div> */}
        </div>
        <Link href='/' className='hover:underline decoration-accent'>
          Popular
        </Link>
        <Link href='/' className='hover:underline decoration-accent'>
          Feed
        </Link>
      </div>

      <Link href='/'>
        <h6>SiTENAMË</h6>
      </Link>

      <div className='flex gap-8'>
        <Icon className='cursor-pointer' path={mdiMagnify} size={1} />
        <Icon className='cursor-pointer' path={mdiHeartOutline} size={1} />
        <Icon className='cursor-pointer' path={mdiAccount} size={1} />
        <div className='relative'>
          <Icon className='cursor-pointer' path={mdiCart} size={1} />
          <div className='absolute -top-1 -right-1 bg-accent rounded-full p-1 text-center text-xs'></div>
        </div>
      </div>
    </header>
  );
}
