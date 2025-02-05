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
// - button functionality

export default function CartProductCard({ cartProduct }: CardProps) {
  const router = useRouter();
  const saved: boolean = savedProducts.some(
    (sP) => sP.color.id === cartProduct.color.id
  );
  return (
    <div className='border-b last:border-none border-primary pb-4'>
      <div className='flex gap-2 md:gap-4'>
        <Image
          src={cartProduct.color.images.cover}
          alt={`${cartProduct.color.colorName} ${cartProduct.product.name}`}
          height={1280}
          width={1024}
          className='aspect-[4/5] w-1/3 md:w-1/6 rounded object-cover object-center cursor-pointer bg-background dark:bg-white'
          onClick={() =>
            router.push(
              `/product/${cartProduct.product.productSlug}/${cartProduct.product.id}?color=${cartProduct.color.colorName}`
            )
          }
          priority
        />

        <div className='w-2/3 p-0 md:p-2 flex flex-col justify-between'>
          <div>
            <h4 className='text-base md:text-xl lg:text-2xl'>
              {cartProduct.product.name}
            </h4>
            <p className='whitespace-pre-line text-sm md:text-base lg:text-lg'>
              Color: {cartProduct.color.colorName}
            </p>
            <p className='whitespace-pre-line text-sm md:text-lg'>
              Size: {cartProduct.size}
            </p>
          </div>
          <button className='self-end md:self-auto btn-circle h-8 w-8 md:h-12 md:max-w-48 md:w-auto md:btn-secondary'>
            <span className='hidden md:flex flex-nowrap items-center justify-center gap-2 text-base'>
              {saved ? 'Saved' : 'Save'}{' '}
              <Icon path={saved ? mdiHeart : mdiHeartOutline} size={1} />
            </span>
            <span className='flex md:hidden items-center'>
              <Icon path={saved ? mdiHeart : mdiHeartOutline} size={1} />
            </span>
          </button>
        </div>

        {/* PC price and quantity */}
        <div className='hidden md:flex flex-col justify-between w-1/3 p-2'>
          <Price cartProduct={cartProduct} />
          <Quantity cartProduct={cartProduct} />
        </div>
      </div>

      {/* Mobile price and quantity */}
      <div className='md:hidden flex justify-between items-center pt-2'>
        <Price cartProduct={cartProduct} />
        <Quantity cartProduct={cartProduct} />
      </div>
    </div>
  );
}

function Price({ cartProduct }: CardProps) {
  return (
    <div className='hover:underline decoration-accent text-lg md:text-xl lg:text-2xl font-heading text-end'>
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
  );
}

function Quantity({ cartProduct }: CardProps) {
  return (
    <div className='flex btn-secondary h-12 gap-4 items-center justify-between rounded-full border'>
      <button>
        <Icon path={mdiTrashCan} size={0.75} />
      </button>
      <p>{cartProduct.quantity}</p>
      <button>
        <Icon path={mdiPlus} size={0.75} />
      </button>
    </div>
  );
}
