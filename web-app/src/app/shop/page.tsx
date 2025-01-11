'use client';
import Modal from '@/components/Modal';
import ProductCard from '@/components/ProductCard';
import { mockProducts } from '@/interfaces/products';
import { mdiChevronDown } from '@mdi/js';
import Icon from '@mdi/react';
import { useRef, useState } from 'react';

export default function Shop() {
  const scrollDivRef = useRef<HTMLDivElement | null>(null);
  const [showScrollLeft, setShowScrollLeft] = useState<boolean>(false);
  const [showScrollRight, setShowScrollRight] = useState<boolean>(false);
  const [filterModalOpen, setFilterModalOpen] = useState<boolean>(false);

  const updateScrollButtons = () => {
    if (scrollDivRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollDivRef.current;
      setShowScrollLeft(scrollLeft > 0);
      console.log(scrollLeft, clientWidth, scrollWidth);
      setShowScrollRight(scrollLeft + clientWidth < scrollWidth - 10);
    }
  };

  const scrollLeft = () => {
    if (scrollDivRef.current) {
      scrollDivRef.current.scrollTo({
        left: -200,
        behavior: 'smooth'
      });
    }
  };

  const scrollRight = () => {
    if (scrollDivRef.current) {
      scrollDivRef.current.scrollTo({
        left: scrollDivRef.current.scrollWidth,
        behavior: 'smooth'
      });
    }
  };
  return (
    <main>
      {/* <div className='sticky top-16 mb-4 flex w-full justify-center gap-4 py-4 bg-background shadow'> */}
      <div className='sticky top-16 mb-4 flex justify-between gap-8 p-2 bg-background shadow w-full'>
        {showScrollLeft && (
          <button onClick={scrollLeft} className='mt-2 border'>
            Scroll Left
          </button>
        )}
        <div
          ref={scrollDivRef}
          className='flex overflow-x-scroll items-center gap-8 text-xl text-nowrap pb-2'
          style={{ scrollbarWidth: 'none' }}
          onScroll={updateScrollButtons}
        >
          <button className='text-accent'>All</button>
          <button>Hats</button>
          <button>Beanies</button>
          <button>T-Shirts</button>
          <button>Hoodies/Jackets</button>
          <button>Pants</button>
          <button>Jeans</button>
          <button>Accessories</button>
        </div>
        {showScrollRight && (
          <button onClick={scrollRight} className='mt-2'>
            Scroll Right
          </button>
        )}
        <button className='accent-btn' onClick={() => setFilterModalOpen(true)}>
          Filters
        </button>
      </div>
      <div className='grid grid-cols-3 lg:grid-cols-4 gap-4'>
        {mockProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      <Modal isOpen={filterModalOpen} onClose={() => setFilterModalOpen(false)}>
        <div className='w-96 flex flex-col'>
          <h4>Filters</h4>
          <button className='w-full flex justify-between p-4 border-t'>Sort <Icon path={mdiChevronDown} size={1}/></button>
          <button className='w-full flex justify-between p-4 border-t'>Type <Icon path={mdiChevronDown} size={1}/></button>
          <button className='w-full flex justify-between p-4 border-t'>Fit <Icon path={mdiChevronDown} size={1}/></button>
          <button className='w-full flex justify-between p-4 border-t'>Size <Icon path={mdiChevronDown} size={1}/></button>
          <button className='w-full flex justify-between p-4 border-t'>Color <Icon path={mdiChevronDown} size={1}/></button>
          <div className='w-full flex gap-4'>
            <button className='secondary-btn'>Clear All</button>
            <button className='accent-btn w-full'>Apply</button>
          </div>
        </div>
      </Modal>
    </main>
  );
}
