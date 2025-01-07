import { Product } from '@/interfaces/products';
import { discountedPrice } from '@/utils/helperFunctions';
import Image from 'next/image';
import Link from 'next/link';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <Link href={`/product/${product.id}`} className='block rounded-3xl group'>
      <Image
        src={product.colors[0].images.cover}
        alt={product.name}
        height={1280}
        width={1024}
        loading='lazy'
        style={{ backgroundColor: 'white' }}
        className='aspect-[4/5] w-96 rounded object-cover object-center'
      />

      <div className='py-2 group-hover:underline decoration-accent max-w-96'>
        <h6>{product.name}</h6>
        {/* <h6>${product.colors[0].price}</h6> */}
        {product.colors[0].discount ? (
          <h6>
            $
            {discountedPrice(
              product.colors[0].price,
              product.colors[0].discount
            )}{' '}
            <span className='line-through text-accent'>
              ${product.colors[0].price}
            </span>
          </h6>
        ) : (
          <h6>${product.colors[0].price}</h6>
        )}
      </div>
    </Link>
  );
}
