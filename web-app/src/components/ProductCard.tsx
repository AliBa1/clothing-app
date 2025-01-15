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
        style={{ backgroundColor: 'white' }}
        className='aspect-[4/5] w-96 rounded object-cover object-center'
        priority
      />

      <div className='flex items-center w-full mt-2 mb-2 md:mb-0'>
        {product && (
          <Image
            src={product.brand.logo}
            alt={product.brand.name}
            height={500}
            width={500}
            loading='lazy'
            style={{ backgroundColor: 'white' }}
            // className='aspect-square h-16 w-16 rounded-full border'
            className='aspect-square h-4 w-4 md:h-8 md:w-8 rounded-full border'
          />
        )}
        {/* link to brand page vvvvvvv */}
        <p className='text-sm md:text-base px-2'>{product?.brand.name}</p>
      </div>

      <div className='group-hover:underline decoration-accent text-base md:text-xl font-heading'>
        <p>{product.name}</p>
        {/* <h6>${product.colors[0].price}</h6> */}
        {product.colors[0].discount ? (
          <p>
            $
            {discountedPrice(
              product.colors[0].price,
              product.colors[0].discount
            )}{' '}
            <span className='line-through text-accent'>
              ${product.colors[0].price}
            </span>
          </p>
        ) : (
          <p>${product.colors[0].price}</p>
        )}
        <p className='text-sm md:text-base'>{product?.colors.length > 1 && 'Multiple colors availible'}</p>
      </div>
    </Link>
  );
}
