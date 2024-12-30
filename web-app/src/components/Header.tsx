import Image from 'next/image';
import Icon from '@mdi/react';
import { mdiCart } from '@mdi/js';

export default function Header() {
  return (
    <header className='w-full flex border justify-between p-4'>
      <Image src={'/logos/example-logo-long.png'} alt='Logo' width={500} height={500} className='w-24' />
      <p>Shop</p>
      <p>Shop</p>
      {/* <div className='flex px-2 rounded-full bg-gray-200 text-black'>
        <input type="search" placeholder='Search' className='p-0 bg-gray-200 border-none rounded'/>
        </div> */}
      <div className='flex'>
        <input type="text" placeholder='Search' className='px-2 rounded-full bg-gray-200 text-black'/>
        <Icon path={mdiCart} size={1} />
        <Image src={'/logos/blank-profile-pic.png'} alt='Profile' width={500} height={500} className='w-16 border' />
      </div>
    </header>
  );
}
