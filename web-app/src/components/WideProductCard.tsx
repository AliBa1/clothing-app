import { BrandProduct, ColorVariant } from '@/interfaces/brandProducts';
import { discountedPrice } from '@/utils/helperFunctions';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import BrandLink from './BrandLink';
import Icon from '@mdi/react';
import { mdiHeart, mdiHeartOutline } from '@mdi/js';
import { savedProducts } from '@/interfaces/userProducts';

interface ProductCardProps {
  product: BrandProduct;
  colorVariant?: ColorVariant;
}
/**
 * Product displayed in feed with brand, description, name, and price. Takes user to product page if clicked.
 */
export default function WideProductCard({
  product,
  colorVariant
}: ProductCardProps) {
  const router = useRouter();
  const [image, setImage] = useState(
    colorVariant?.images.cover || product.colors[0].images.cover
  );
  const [color, setColor] = useState(
    colorVariant?.colorName || product.colors[0].colorName
  );
  const [colorId, setColorId] = useState<string>(
    colorVariant?.id || product.colors[0].id
  );
  const [saved, setSaved] = useState(
    savedProducts.some((sP) => sP.colorId === colorId)
  );

  useEffect(() => {
    if (savedProducts.some((sP) => sP.colorId === colorId)) {
      setSaved(true);
    } else {
      setSaved(false);
    }
  }, [color, colorId]);

  return (
    <div className='block rounded-3xl w-full'>
      <BrandLink brand={product.brand} size='big' />

      <div className='flex gap-4 group'>
        <Image
          src={image}
          alt={`${color} ${product.name}`}
          height={1280}
          width={1024}
          className='aspect-[4/5] w-1/2 rounded object-cover object-center cursor-pointer bg-background dark:bg-white'
          onClick={() =>
            router.push(
              `/product/${product.productSlug}/${product.id}?color=${color}`
            )
          }
          priority
        />

        <div className='flex flex-col justify-between w-1/2'>
          <div>
            <Link
              href={`/product/${product.productSlug}/${product.id}?color=${color}`}
              className='hover:underline decoration-accent text-base md:text-2xl font-heading'
            >
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
                {product?.colors.length > 1 &&
                  `${product.colors.length} Colors`}
              </p>
            </Link>

            {product?.colors.length > 1 && (
              <div className='hidden md:flex gap-2 mb-4'>
                {product.colors.map((c) => (
                  <button
                    key={`${product.name}-${c.colorName}`}
                    className='btn-circle h-8 w-8'
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

            <p className='whitespace-pre-line text-sm md:text-lg'>
              {product.description}
            </p>
          </div>

          <button className='btn-secondary md:h-16 w-full flex flex-nowrap items-center justify-center gap-2'>
            {saved ? 'Saved' : 'Save'}{' '}
            <Icon path={saved ? mdiHeart : mdiHeartOutline} size={1.5} />
          </button>

          {/* <button className='btn-primary h-12 md:h-16 w-full flex flex-nowrap items-center justify-center gap-2'>
            Saved <Icon path={mdiHeart} size={1.5} />
          </button> */}
        </div>
      </div>
    </div>
  );
}
