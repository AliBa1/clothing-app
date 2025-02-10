import { cartProducts } from '@/interfaces/userProducts';
import CartProductCard from './CartProductCard';
import { discountedPrice } from '@/utils/helperFunctions';
import { useRouter } from 'next/navigation';

interface CartProps {
  onClose: () => void;
}

// TODO:
// - change background colors?
// - create cart items
// - make bottom btns and text functional
// - add you may also like section
// - add for cart empty

export default function CartModal({ onClose }: CartProps) {
  const router = useRouter();
  const totalPrice = cartProducts.reduce(
    (total, p) =>
      total +
      (p.color.discount
        ? discountedPrice(p.color.price, p.color.discount)
        : p.color.price) *
        p.quantity,
    0
  );
  return (
    <div className='flex flex-col gap-4 justify-between'>
      <div className='flex flex-col gap-8'>
        {cartProducts.map((p) => (
          <CartProductCard
            key={`${p.product.id}-${p.color.id}`}
            cartProduct={p}
          />
        ))}
      </div>
      <div className='sticky bottom-0 bg-background border-t border-primary'>
        <div className='flex justify-between md:text-xl pb-4'>
          {cartProducts.length > 1 ? (
            <p>{cartProducts.length} Items</p>
          ) : (
            <p>1 Item</p>
          )}
          <p>Total: ${totalPrice}</p>
        </div>
        <div className='flex flex-col gap-4'>
          <button
            className='btn-primary h-12 md:h-16 w-full'
            onClick={() => {
              onClose();
              router.push('/cart');
            }}
          >
            View Cart
          </button>
          <button
            className='btn-secondary h-12 md:h-16 w-full flex flex-nowrap items-center justify-center gap-2'
            onClick={onClose}
          >
            Keep Shopping
          </button>
        </div>
      </div>
    </div>
  );
}
