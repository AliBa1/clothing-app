import ProductCard from '@/components/ProductCard';
import Image from 'next/image';

export default function Shop() {
  const mockProducts: Product[] = [
    {
      name: 'Puffer Jacket',
      price: 120,
      coverImg: '/mock/puff_jacket_example.png'
    },
    {
      name: 'Statement Hoodie',
      price: 60,
      coverImg: '/mock/hoodie_example.jpeg'
    }
  ];

  return (
    <main>
      <ProductCard product={mockProducts[0]} />
      <br></br>
      <ProductCard product={mockProducts[1]} />
    </main>
  );
}
