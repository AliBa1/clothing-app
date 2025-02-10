'use client';
import ProductCard from '@/components/ProductCard';
import { savedProducts } from '@/interfaces/userProducts';

// TODO:
// - add for saved items empty

export default function SavedPage() {
  return (
    <main>
      <h3 className='mt-4'>Saved Items</h3>
      <div className='products-grid'>
        {savedProducts.map((p) => (
          <ProductCard
            key={`${p.product.id}-${p.color.id}`}
            product={p.product}
            showBrand={true}
            colorVariant={p.color}
          />
        ))}
      </div>
    </main>
  );
}
