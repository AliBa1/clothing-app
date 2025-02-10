import { BrandProduct, ColorVariant } from '@/interfaces/brandProducts';
import { discountedPrice } from '@/utils/helperFunctions';
import Image from 'next/image';
import Link from 'next/link';
// import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import BrandLink from './BrandLink';
import Icon from '@mdi/react';
import { mdiHeart, mdiHeartOutline } from '@mdi/js';
import { savedProducts } from '@/interfaces/userProducts';

interface ProductCardProps {
  product: BrandProduct;
  showBrand: boolean;
  colorVariant?: ColorVariant;
}
/**
 * Product displayed with brand, name, and price. Takes user to product page if clicked.
 */
export default function ProductCard({
  product,
  showBrand,
  colorVariant
}: ProductCardProps) {
  const [image, setImage] = useState<string>(
    colorVariant?.images.cover || product.colors[0].images.cover
  );
  const [color, setColor] = useState<string>(
    colorVariant?.colorName || product.colors[0].colorName
  );
  const [colorId, setColorId] = useState<string>(
    colorVariant?.id || product.colors[0].id
  );
  const [saved, setSaved] = useState<boolean>(
    savedProducts.some((sP) => sP.color.id === colorId)
  );

  useEffect(() => {
    if (savedProducts.some((sP) => sP.color.id === colorId)) {
      setSaved(true);
    } else {
      setSaved(false);
    }
  }, [color, colorId]);

  return (
    <div className='block rounded-3xl text-center'>
      {showBrand && <BrandLink brand={product.brand} size='normal' />}

      <Link
        href={`/product/${product.productSlug}/${product.id}?color=${color}`}
        className='group'
      >
        <div className='relative'>
          <Image
            // src={product.colors[0].images.cover}
            src={image}
            alt={`'${color}' ${product.name}`}
            height={1280}
            width={1024}
            className='aspect-[4/5] w-full rounded object-cover object-center bg-background dark:bg-white'
            priority
          />
          <button className='btn-circle bg-slate-200 border-none shadow shadow-black absolute bottom-2 right-2 md:bottom-4 md:right-4'>
            <Icon
              path={saved ? mdiHeart : mdiHeartOutline}
              size={1}
              color={'black'}
            />
          </button>
        </div>

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
                setColorId(c.id);
              }}
            />
          ))}
        </div>
      )}
    </div>
  );
}
