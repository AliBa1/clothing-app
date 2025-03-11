import { BrandProduct, ColorVariant } from '@/interfaces/brandProducts';
import Image from 'next/image';
import Link from 'next/link';

interface BannerProps {
  product: BrandProduct;
  colorVariant?: ColorVariant;
}

export default function ProductBannerCompact({
  product,
  colorVariant
}: BannerProps) {
  const image: string =
    colorVariant?.images.cover || product.colors[0].images.cover;
  const color: string = colorVariant?.colorName || product.colors[0].colorName;
  return (
    <div className='w-full lg:w-1/2 flex flex-col justify-between p-4 bg-white border-x border-accent'>
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

      <div className='flex flex-col md:flex-row justify-between items-center md:gap-8 text-text dark:text-secondary'>
        <h4 className='text-xl md:text-2xl text-center md:text-start'>
          {product.name}
        </h4>
        <div className='flex md:flex-col w-full gap-4 items-center self-end'>
          <Link
            href={`/product/${product.productSlug}/${product.id}?color=${color}`}
            className='btn-accent w-1/2 text-center'
          >
            View Item
          </Link>
          <Link
            href={`/${product.brand.handle}`}
            className='btn-primary dark:btn-secondary dark:border-secondary w-1/2 text-center'
          >
            {product.brand.name}
          </Link>
        </div>
      </div>
    </div>
  );
}
