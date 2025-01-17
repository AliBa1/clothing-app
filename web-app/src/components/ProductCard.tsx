import { Product } from '@/interfaces/products';
import { discountedPrice } from '@/utils/helperFunctions';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

interface ProductCardProps {
  product: Product;
  showBrand: boolean;
}
/**
 * Product displayed with brand, name, and price. Takes user to product page if clicked.
 */
export default function ProductCard({ product, showBrand }: ProductCardProps) {
  const router = useRouter();
  const [image, setImage] = useState(product.colors[0].images.cover);
  const [color, setColor] = useState(product.colors[0].colorName);
  return (
    <div className='block rounded-3xl text-center'>
      {showBrand && (
        <div className='flex items-center w-full mb-2 text-nowrap'>
          <Image
            src={product.brand.logo}
            alt={product.brand.name}
            height={500}
            width={500}
            loading='lazy'
            style={{ backgroundColor: 'white' }}
            className='aspect-square h-4 w-4 md:h-8 md:w-8 rounded-full border cursor-pointer peer'
            onClick={() => router.push(`/${product.brand.handle}`)}
          />
          <p
            className='text-sm md:text-base px-2 truncate hover:underline cursor-pointer peer-hover:underline'
            onClick={() => router.push(`/${product.brand.handle}`)}
          >
            {product?.brand.name}
          </p>
        </div>
      )}

      <Link
        href={`/product/${product.productSlug}/${product.id}`}
        className='group'
      >
        <Image
          // src={product.colors[0].images.cover}
          src={image}
          alt={`${color} ${product.name}`}
          height={1280}
          width={1024}
          style={{ backgroundColor: 'white' }}
          className='aspect-[4/5] w-96 rounded object-cover object-center'
          priority
        />

        <div className='group-hover:underline decoration-accent text-sm md:text-xl font-body md:font-heading'>
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
        </div>
      </Link>

      {product?.colors.length > 1 && (
        <div className='hidden md:flex gap-1 justify-center'>
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
    </div>
  );
}
