import Image from 'next/image';
import Icon from '@mdi/react';
import { mdiAccount, mdiCart, mdiHeartOutline, mdiMagnify } from '@mdi/js';
import Link from 'next/link';

export default function Header() {
  return (
    <header className='sticky top-0 flex justify-between items-center px-8 py-2'>
      <div className='flex gap-8'>
        <Link href="/">Shop</Link>
        <Link href="/">Popular</Link>
        <Link href="/">Feed</Link>
      </div>


      <Link href="/">
        <h4>SiTENAMË</h4>
      </Link>

      <div className='flex gap-8'>
        <Icon path={mdiMagnify} size={1} />
        <Icon path={mdiHeartOutline} size={1} />
        <Icon path={mdiAccount} size={1} />
        <div className='relative'>
          <Icon path={mdiCart} size={1} />
          <div className='absolute -top-1 -right-1 bg-accent rounded-full p-1 text-center text-xs'></div>
        </div>
      </div>
    </header>
  );
}
