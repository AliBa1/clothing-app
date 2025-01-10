'use client';
import Modal from '@/components/Modal';
import ProductCard from '@/components/ProductCard';
import { mockProducts } from '@/interfaces/products';
import { useState } from 'react';

export default function Shop() {
  const [sortModalOpen, setSortModalOpen] = useState<boolean>(false);
  return (
    <main>
      <div className='sticky top-16 mb-4 flex w-full justify-center gap-4 py-4 bg-secondary border-y'>
        <button className='secondary-btn'>Mens T-shirts</button>
        <button className='secondary-btn'>Filters: 0</button>
        <button
          className='secondary-btn'
          onClick={() => setSortModalOpen(true)}
        >
          Sort: Default
        </button>
      </div>
      <div className='grid grid-cols-3 gap-4'>
        {mockProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      {/* <dialog aria-modal={true} className='fixed inset-0 z-50 overflow-auto bg-gray-800 bg-opacity-50 flex items-center justify-center w-full h-full'>
        <div className='bg-white rounded-lg p-8'>
          <p>This is a modal</p>
          <p>Here are the options for it</p>
        </div>
      </dialog> */}

      <Modal isOpen={sortModalOpen} onClose={() => setSortModalOpen(false)}>
        <>
          <p>My modal</p>
          <p>I am testing it I AM TESTING</p>
        </>
      </Modal>
    </main>
  );
}
