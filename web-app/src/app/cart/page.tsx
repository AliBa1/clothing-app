import CartProductCard from '@/components/CartProductCard';
import { cartProducts } from '@/interfaces/userProducts';

export default function CartPage() {
  return (
    <main>
      <h1>Cart</h1>
      <div className='flex justify-between'>
        <div className='flex flex-col gap-8'>
          {cartProducts.map((p) => (
            <CartProductCard
              key={`${p.product.id}-${p.color.id}`}
              cartProduct={p}
            />
          ))}
        </div>

        <div className='sticky top-16 right-0'>
          
        </div>
      </div>
    </main>
  );
}
