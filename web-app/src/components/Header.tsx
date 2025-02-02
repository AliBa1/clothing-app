'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Icon from '@mdi/react';
import {
  mdiAccount,
  mdiCart,
  mdiHeartOutline,
  mdiMagnify,
  mdiMenu
} from '@mdi/js';
import { useState } from 'react';
import Modal from './Modal';
import SearchModal from './SearchModal';
import Cart from './Cart';

export default function Header() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  const [searchOpen, setSearchOpen] = useState<boolean>(false);
  const [cartOpen, setCartOpen] = useState<boolean>(false);

  return (
    <header className='sticky top-0 z-10 h-16 bg-background grid grid-cols-2 md:grid-cols-3 items-center px-4 md:px-8 py-2 border-b border-primary'>
      {/* Web Header */}
      <nav className='hidden md:flex gap-8'>
        <Link
          href='/shop'
          className={`md:hover:underline decoration-accent ${
            pathname === '/shop' ? 'text-accent' : ''
          }`}
        >
          Shop
        </Link>
        {/* <Link
          href='/'
          className={`md:hover:underline decoration-accent ${
            pathname === '/popular' ? 'text-accent' : ''
          }`}
        >
          Popular
        </Link> */}
        <Link
          href='/feed'
          className={`md:hover:underline decoration-accent ${
            pathname === '/feed' ? 'text-accent' : ''
          }`}
        >
          Feed
        </Link>
      </nav>

      <Link href='/' className='md:place-items-center'>
        <h6>FLEA</h6>
      </Link>

      <div className='flex gap-4 md:gap-8 place-content-end'>
        <button
          aria-label='Search'
          title='Search'
          onClick={() => setSearchOpen(true)}
        >
          <Icon path={mdiMagnify} size={1} />
        </button>
        <Link
          href={'/saved'}
          aria-label='Saved'
          title='Saved'
          className='hidden md:block'
        >
          <Icon path={mdiHeartOutline} size={1} />
        </Link>
        <button aria-label='Account' title='Account'>
          <Icon path={mdiAccount} size={1} />
        </button>

        <button
          aria-label='Cart'
          title='Cart'
          onClick={() => setCartOpen(true)}
        >
          <div className='relative'>
            <Icon path={mdiCart} size={1} />
            <div className='absolute -top-1 -right-1 bg-accent rounded-full p-1 text-center text-xs' />
            <div className='absolute -top-1 -right-1 bg-accent rounded-full p-1 text-center text-xs animate-ping' />
          </div>
        </button>

        <button
          aria-label='Menu'
          title='Menu'
          className='block md:hidden'
          onClick={() => setMenuOpen(true)}
        >
          <Icon path={mdiMenu} size={1} />
        </button>
      </div>

      {/* Mobile Side Modal */}
      <Modal
        isOpen={menuOpen}
        onClose={() => setMenuOpen(false)}
        lockedWidth={false}
      >
        <div className='flex flex-col gap-4'>
          <Link
            href='/shop'
            className={`md:hover:underline decoration-accent ${
              pathname === '/shop' ? 'text-accent' : ''
            }`}
            onClick={() => setMenuOpen(false)}
          >
            Shop
          </Link>
          {/* <Link
            href='/'
            className={`md:hover:underline decoration-accent ${
              pathname === '/popular' ? 'text-accent' : ''
            }`}
            onClick={() => setMenuOpen(false)}
          >
            Popular
          </Link> */}
          <Link
            href='/feed'
            className={`md:hover:underline decoration-accent ${
              pathname === '/feed' ? 'text-accent' : ''
            }`}
            onClick={() => setMenuOpen(false)}
          >
            Feed
          </Link>

          <Link
            href='/saved'
            className={`md:hover:underline decoration-accent ${
              pathname === '/saved' ? 'text-accent' : ''
            }`}
            onClick={() => setMenuOpen(false)}
          >
            Saved
          </Link>
        </div>
      </Modal>

      <SearchModal isOpen={searchOpen} onClose={() => setSearchOpen(false)} />

      <Modal
        isOpen={cartOpen}
        onClose={() => setCartOpen(false)}
        lockedWidth={true}
      >
        <Cart />
      </Modal>
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
