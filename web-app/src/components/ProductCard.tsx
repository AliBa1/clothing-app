import Image from 'next/image';
import Link from 'next/link';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <Link href={'/shop'} className='mt-4 block rounded-3xl'>
      <Image
        src={product.coverImg}
        alt={product.name}
        height={1280}
        width={1024}
        style={{ backgroundColor: 'lightgrey' }}
        className='aspect-[4/5] w-96 rounded'
      />

      <div className='py-2'>
        <h6>{product.name}</h6>
        <h6>${product.price}</h6>
      </div>
    </Link>
  );
}
