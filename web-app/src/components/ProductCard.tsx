import { Product } from '@/interfaces/products';
import Image from 'next/image';
import Link from 'next/link';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <Link href={'/shop'} className='block rounded-3xl group'>
      <Image
        src={product.coverImg}
        alt={product.name}
        height={1280}
        width={1024}
        loading='lazy'
        style={{ backgroundColor: 'white' }}
        className='aspect-[4/5] w-96 rounded object-cover object-center'
      />

      <div className='py-2 group-hover:underline decoration-accent'>
        <h6>{product.name}</h6>
        <h6>${product.price}</h6>
      </div>
    </Link>
  );
}
