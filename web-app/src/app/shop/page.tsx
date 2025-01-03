import ProductCard from '@/components/ProductCard';
import { mockProducts } from '@/interfaces/products';
import Image from 'next/image';

export default function Shop() {
  // const mockProducts: Product[] = [
  //   {
  //     name: 'Puffer Jacket',
  //     price: 120,
  //     coverImg: '/mock/puff_jacket_example.png'
  //   },
  //   {
  //     name: 'Statement Hoodie',
  //     price: 60,
  //     coverImg: '/mock/hoodie_example.jpeg'
  //   }
  // ];

  return (
    <main>
      <div className='grid grid-cols-3 gap-4'>
        {mockProducts.map((product) => (
          <ProductCard key={product.name} product={product} />
        ))}
      </div>
      {/* <ProductCard product={mockProducts[0]} />
      <br></br>
      <ProductCard product={mockProducts[1]} /> */}
    </main>
  );
}
