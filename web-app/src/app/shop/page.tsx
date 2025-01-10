'use client';
import Modal from '@/components/Modal';
import ProductCard from '@/components/ProductCard';
import { mockProducts } from '@/interfaces/products';
import { useRef, useState } from 'react';

export default function Shop() {
  const scrollDivRef = useRef<HTMLDivElement | null>(null);
  const [showScrollLeft, setShowScrollLeft] = useState<boolean>(false);
  const [showScrollRight, setShowScrollRight] = useState<boolean>(true);
  const [filterModalOpen, setFilterModalOpen] = useState<boolean>(false);

  const updateScrollButtons = () => {
    if (scrollDivRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollDivRef.current;
      setShowScrollLeft(scrollLeft > 0);
      // console.log(scrollLeft, clientWidth, scrollWidth);
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
      <div className='sticky top-16 mb-4 flex justify-between gap-8 py-4 bg-background shadow w-full px-2'>
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
          <button>All</button>
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
        <>
          <p>My modal</p>
          <p>I am testing it I AM TESTING</p>
        </>
      </Modal>
    </main>
  );
}
