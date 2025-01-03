import ProductCard from '@/components/ProductCard';
import { mockProducts } from '@/interfaces/products';
import Image from 'next/image';

export default function Shop() {

  return (
    <main>
      <div className='grid grid-cols-3 gap-4'>
        {mockProducts.map((product) => (
          <ProductCard key={product.name} product={product} />
        ))}
      </div>
    </main>
  );
}
