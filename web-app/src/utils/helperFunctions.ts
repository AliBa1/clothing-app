import { Discount } from '@/interfaces/products';
/**
 * Returns the value of the discounted price.
 *
 * @param price - The total price of a product
 * @param discount - The discount object of the product
 * @returns The value of the discounted price
 */
export function discountedPrice(price: number, discount: Discount): number {
  if (discount.type === 'percent') {
    return Math.round(price - (price * discount.amount) / 100);
  } else {
    return price - discount.amount;
  }
}
