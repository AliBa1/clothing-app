import { CartProduct, savedProducts } from '@/interfaces/userProducts';
import { discountedPrice } from '@/utils/helperFunctions';
import { mdiHeart, mdiHeartOutline, mdiPlus, mdiTrashCan } from '@mdi/js';
import Icon from '@mdi/react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

interface CardProps {
  cartProduct: CartProduct;
}

// TODO:
// - mobile view
// - button functionality

export default function CartProductCard({ cartProduct }: CardProps) {
  const router = useRouter();
  const saved: boolean = savedProducts.some(
    (sP) => sP.color.id === cartProduct.color.id
  );
  return (
    <div className='flex gap-1 md:gap-4 rounded border'>
      <Image
        src={cartProduct.color.images.cover}
        alt={`${cartProduct.color.colorName} ${cartProduct.product.name}`}
        height={1280}
        width={1024}
        className='aspect-[4/5] w-1/3 md:w-1/6 rounded-l object-cover object-center cursor-pointer bg-background dark:bg-white'
        onClick={() =>
          router.push(
            `/product/${cartProduct.product.productSlug}/${cartProduct.product.id}?color=${cartProduct.color.colorName}`
          )
        }
        priority
      />

      <div className='w-2/3 pr-2'>
        <h4 className='text-base md:text-2xl'>{cartProduct.product.name}</h4>
        <p className='whitespace-pre-line text-sm md:text-xl'>
          Color: {cartProduct.color.colorName}
        </p>
        <p className='whitespace-pre-line text-sm md:text-xl'>
          Size: {cartProduct.size}
        </p>
      </div>

      <div className='flex flex-col justify-between w-1/6 p-2'>
        <div className='hover:underline decoration-accent text-base md:text-2xl font-heading text-end'>
          {cartProduct.color.discount ? (
            <p>
              $
              {discountedPrice(
                cartProduct.color.price,
                cartProduct.color.discount
              )}{' '}
              <span className='line-through text-accent'>
                ${cartProduct.color.price}
              </span>
            </p>
          ) : (
            <p>${cartProduct.color.price}</p>
          )}
        </div>

        <div className='flex flex-col gap-4'>
          <button className='btn-circle md:btn-secondary md:h-16 flex flex-nowrap items-center justify-center gap-0 md:gap-2'>
            <span className='hidden md:flex'>
              {saved ? 'Saved' : 'Save'}{' '}
              <Icon path={saved ? mdiHeart : mdiHeartOutline} size={1.5} />
            </span>
            <span className='block md:hidden'>
              <Icon path={saved ? mdiHeart : mdiHeartOutline} size={1} />
            </span>
          </button>

          <div className='hidden btn-secondary md:h-16 md:flex items-center justify-between rounded-full border'>
            <button>
              <Icon path={mdiTrashCan} size={1} />
            </button>
            <p>{cartProduct.quantity}</p>
            <button>
              <Icon path={mdiPlus} size={1} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
