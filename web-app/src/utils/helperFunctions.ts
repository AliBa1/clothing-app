import { Discount } from '@/interfaces/products';

export function discountedPrice(price: number, discount: Discount): number {
  if (discount.type === 'percent') {
    return Math.round(price - (price * discount.amount) / 100);
  } else {
    return price - discount.amount;
  }
}
