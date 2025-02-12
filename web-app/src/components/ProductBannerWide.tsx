import { BrandProduct, ColorVariant } from '@/interfaces/brandProducts';
import Image from 'next/image';
import Link from 'next/link';

interface BannerProps {
  product: BrandProduct;
  colorVariant?: ColorVariant;
}

export default function ProductBannerWide({
  product,
  colorVariant
}: BannerProps) {
  const image: string =
    colorVariant?.images.cover || product.colors[0].images.cover;
  const color: string = colorVariant?.colorName || product.colors[0].colorName;
  return (
    <div className='w-full flex justify-between px-8 bg-white'>
      <div className='flex flex-col justify-evenly text-text dark:text-secondary'>
        <h4>{product.name}</h4>
        <div className='flex flex-col lg:flex-row gap-4'>
          <Link href={`/product/${product.productSlug}/${product.id}?color=${color}`} className='btn-accent text-center'>
            View Item
          </Link>
          <Link
            href={`/${product.brand.handle}`}
            className='btn-primary dark:btn-secondary dark:border-secondary text-center'
          >
            Shop {product.brand.name}
          </Link>
        </div>
      </div>

      <div className='mx-auto flex flex-col items-center'>
        <Image
          // src={product.colors[0].images.cover}
          src={image}
          alt={`'${color}' ${product.name}`}
          height={1280 / 2}
          width={1024 / 2}
          className='aspect-[4/5] w-full rounded object-cover object-center'
          // className='aspect-[4/5] w-full rounded object-cover object-center bg-background dark:bg-white'
          priority
        />

        {/* {product?.colors.length > 1 && (
          <div className='hidden md:flex gap-1 justify-center'>
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
                }}
              />
            ))}
          </div>
        )} */}
      </div>
    </div>
  );
}
