import ProductCard from '@/components/ProductCard';
import { mockProducts } from '@/interfaces/products';

export default function Shop() {
  return (
    <main>
      <div className='sticky top-16 mb-4 flex w-full justify-center gap-4 py-4 bg-secondary border-y'>
        <button className='secondary-btn'>
          Mens T-shirts
        </button>
        <button className='secondary-btn'>
          Filters: 0
        </button>
        <button className='secondary-btn'>
          Sort: Default
        </button>
      </div>
      <div className='grid grid-cols-3 gap-4'>
        {mockProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </main>
  );
}
