import ProductCard from '@/components/ProductCard';
import { mockProducts } from '@/interfaces/products';

export default function Shop() {
  return (
    <main>
      <div className='grid grid-cols-3 gap-4'>
        {mockProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </main>
  );
}
