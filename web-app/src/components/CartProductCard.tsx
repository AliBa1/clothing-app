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
    // <div className='flex gap-1 md:gap-4 rounded border'>
    <div className='grid grid-cols-2 md:grid-cols-3 gap-1 md:gap-4 rounded border'>
      <Image
        src={cartProduct.color.images.cover}
        alt={`${cartProduct.color.colorName} ${cartProduct.product.name}`}
        height={1280}
        width={1024}
        // className='aspect-[4/5] w-1/3 md:w-1/6 rounded-l object-cover object-center cursor-pointer bg-background dark:bg-white'
        className='aspect-[4/5] rounded-l object-cover object-center cursor-pointer bg-background dark:bg-white'
        onClick={() =>
          router.push(
            `/product/${cartProduct.product.productSlug}/${cartProduct.product.id}?color=${cartProduct.color.colorName}`
          )
        }
        priority
      />

      {/* <div className='w-2/3 p-0 md:p-2 flex flex-col justify-between'> */}
      <div className='p-0 md:p-2 flex flex-col justify-between'>
        <div>
          <h4 className='text-base md:text-2xl'>{cartProduct.product.name}</h4>
          <p className='whitespace-pre-line text-sm md:text-lg'>
            Color: {cartProduct.color.colorName}
          </p>
          <p className='whitespace-pre-line text-sm md:text-lg'>
            Size: {cartProduct.size}
          </p>
        </div>
        <button className='btn-circle h-8 w-8 md:w-auto md:btn-secondary md:h-12 md:max-w-48'>
          <span className='hidden md:flex flex-nowrap items-center justify-center gap-2 text-base'>
            {saved ? 'Saved' : 'Save'}{' '}
            <Icon path={saved ? mdiHeart : mdiHeartOutline} size={1} />
          </span>
          <span className='flex md:hidden items-center'>
            <Icon path={saved ? mdiHeart : mdiHeartOutline} size={1} />
          </span>
        </button>
      </div>

      {/* <div className='flex flex-col justify-between w-1/3 p-0 md:p-4'> */}
      <div className='border flex flex-col justify-between w-1/3 p-0 md:p-4 col-span-2 md:col-span-1'>
        <div className='hover:underline decoration-accent text-base md:text-2xl font-heading text-end'>
          {cartProduct.color.discount ? (
            <p>
              $
              {discountedPrice(
                cartProduct.color.price,
                cartProduct.color.discount
              ) * cartProduct.quantity}{' '}
              <span className='line-through text-accent'>
                ${cartProduct.color.price * cartProduct.quantity}
              </span>
            </p>
          ) : (
            <p>${cartProduct.color.price * cartProduct.quantity}</p>
          )}
        </div>

        <div className='flex btn-secondary md:h-16 items-center justify-between rounded-full border'>
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
  );
}
