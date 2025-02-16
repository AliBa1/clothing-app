import CartProductCard from '@/components/CartProductCard';
import { cartProducts } from '@/interfaces/userProducts';
import Link from 'next/link';

export default function CartPage() {
  const cartEmpty = false;
  return (
    <main>
      {cartEmpty ? (
        <div className='mt-4 flex flex-col items-center'>
          <h4>Your cart is empty</h4>
          <Link href={'/shop'} className='btn-primary py-4 rounded-full'>Shop</Link>
        </div>
      ) : (
        <main className='md:flex-row items-start justify-center pb-8'>
          <div
            className='flex flex-col gap-4 rounded p-2'
            style={{ scrollbarWidth: 'none' }}
          >
            <h4>Cart</h4>
            {cartProducts.map((p) => (
              <CartProductCard
                key={`${p.product.id}-${p.color.id}`}
                cartProduct={p}
              />
            ))}
          </div>

          <div className='sticky bottom-0 w-full md:w-auto bg-background md:bg-auto md:top-16 right-0 rounded text-base md:text-xl p-2 md:p-4 flex flex-col'>
            <div className='flex justify-between'>
              <p>Subtotal</p>
              <p>$124.56</p>
            </div>
            {/* <div className='flex justify-between'>
            <p>Discount</p>
            <p>$124.56</p>
          </div> */}
            <p className='italic text-sm md:text-base'>
              Shipping and taxes calculated at checkout
            </p>
            <div className='flex flex-col gap-4 mt-4'>
              <button className='btn-primary py-4 rounded-full'>
                Checkout
              </button>
              <button className='btn-primary bg-error rounded-full'>
                Empty Cart
              </button>
            </div>
          </div>
        </main>
      )}
    </main>
  );
}
