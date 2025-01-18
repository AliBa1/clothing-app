import { Product } from '@/interfaces/products';
import { discountedPrice } from '@/utils/helperFunctions';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import BrandLink from './BrandLink';

interface ProductCardProps {
  product: Product;
}
/**
 * Product displayed in feed with brand, description, name, and price. Takes user to product page if clicked.
 */
export default function WideProductCard({ product }: ProductCardProps) {
  const router = useRouter();
  const [image, setImage] = useState(product.colors[0].images.cover);
  const [color, setColor] = useState(product.colors[0].colorName);
  return (
    <div className='block rounded-3xl'>
      <BrandLink brand={product.brand} size='normal' />

      <div
        className='flex gap-4 group'
        // href={`/product/${product.productSlug}/${product.id}`}
      >
        <Image
          src={image}
          alt={`${color} ${product.name}`}
          height={1280}
          width={1024}
          className='aspect-[4/5] w-1/5 h-1/4 rounded object-cover object-center cursor-pointer bg-background dark:bg-white'
          onClick={() =>
            router.push(`/product/${product.productSlug}/${product.id}?color=${color}`)
          }
          priority
        />

        <div>
          <Link
            href={`/product/${product.productSlug}/${product.id}?color=${color}`}
            className='hover:underline decoration-accent text-base md:text-xl font-heading'
          >
            {/* <div className='group-hover:underline decoration-accent text-sm md:text-xl font-body md:font-heading'> */}
            <p>{product.name}</p>
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
            <p className='block md:hidden text-sm md:text-base italic font-light'>
              {product?.colors.length > 1 && `${product.colors.length} Colors`}
            </p>
            {/* </div> */}
          </Link>

          {product?.colors.length > 1 && (
            <div className='hidden md:flex gap-1'>
              {product.colors.map((c) => (
                <button
                  key={`${product.name}-${c.colorName}`}
                  className='btn-circle h-4 w-4'
                  style={{
                    background: `${
                      c.primaryColor.broadColor === 'multicolor'
                        ? 'conic-gradient(red, yellow, green, blue, purple)'
                        : `rgb(${c.primaryColor.red}, ${c.primaryColor.green}, ${c.primaryColor.blue})`
                    }`
                  }}
                  onClick={() => {
                    setImage(c.images.cover);
                    setColor(c.colorName);
                  }}
                />
              ))}
            </div>
          )}

          <p className='whitespace-pre-line text-sm md:text-base'>{product.description}</p>
        </div>
      </div>
    </div>
  );
}
