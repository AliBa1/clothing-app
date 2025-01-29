import {
  BrandProduct,
  ColorVariant,
  mockProducts
} from '@/interfaces/brandProducts';
import { cartProducts } from '@/interfaces/userProducts';
import { useEffect, useState } from 'react';
import WideProductCard from './WideProductCard';

interface FetchedCart {
  product: BrandProduct;
  colorVariant: ColorVariant;
  size: string;
  quantity: number;
}

// TODO: 
// - change background colors?
// - create cart items
// - make bottom btns and text functional
// - add you may also like section
// - add for cart empty

export default function Cart() {
  const [products, setProducts] = useState<FetchedCart[]>([]);

  useEffect(() => {
    const fetchedProducts: FetchedCart[] = cartProducts
      .map((s) => {
        const product = mockProducts.find((p) => p.id === s.productId);
        if (!product) {
          return null;
        }
        const colorVariant = product.colors.find((c) => c.id === s.colorId);
        if (!colorVariant) {
          return null;
        }
        return {
          product: product,
          colorVariant: colorVariant,
          size: s.size,
          quantity: s.quantity
        };
      })
      .filter((item): item is FetchedCart => item !== null);
    setProducts(fetchedProducts);
  }, []);

  return (
    <div className='flex flex-col justify-between'>
      <div className=''>
        {products.map((p) => (
          // replace with cart cards
          <WideProductCard key={p.product.id} product={p.product} />
        ))}
      </div>
      <div className='sticky bottom-0 bg-primary'>
        <div className='flex justify-between'>
          <p>6 Items</p>
          <p>Total: $4123</p>
        </div>
        <div className='flex flex-col gap-4'>
          <button className='btn-primary h-12 md:h-16 w-full'>Checkout</button>
          <button className='btn-secondary h-12 md:h-16 w-full flex flex-nowrap items-center justify-center gap-2'>
            Keep Shopping
          </button>
        </div>
      </div>
    </div>
  );
}
