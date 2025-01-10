'use client';
import Modal from '@/components/Modal';
import ProductCard from '@/components/ProductCard';
import { mockProducts } from '@/interfaces/products';
import { useState } from 'react';

export default function Shop() {
  const [sortModalOpen, setSortModalOpen] = useState<boolean>(false);
  return (
    <main>
      <div className='sticky top-16 mb-4 flex w-full justify-center gap-4 py-4 bg-background shadow'>
        <button className='accent-btn'>Mens T-shirts</button>
        <button className='accent-btn'>Filters: 0</button>
        <button className='accent-btn' onClick={() => setSortModalOpen(true)}>
          Sort: Default
        </button>
      </div>
      <div className='grid grid-cols-3 gap-4'>
        {mockProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      <Modal isOpen={sortModalOpen} onClose={() => setSortModalOpen(false)}>
        <>
          <p>My modal</p>
          <p>I am testing it I AM TESTING</p>
        </>
      </Modal>
    </main>
  );
}
