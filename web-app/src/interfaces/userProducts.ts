import { mockProducts } from './brandProducts';

export interface CartProduct {
  // id: string;
  productId: string;
  colorId: string;
  size: string;
  quantity: number;
}

export interface SavedProduct {
  // id: string;
  productId: string;
  colorId: string;
}

export const cartProducts: CartProduct[] = [
  {
    productId: mockProducts[1].id,
    colorId: mockProducts[1].colors[2].id,
    size: mockProducts[1].colors[2].sizes[2].size,
    quantity: 1
  },
  {
    productId: mockProducts[8].id,
    colorId: mockProducts[8].colors[0].id,
    size: mockProducts[8].colors[0].sizes[3].size,
    quantity: 3
  }
];

export const savedProducts: SavedProduct[] = [
  {
    productId: mockProducts[0].id,
    colorId: mockProducts[0].colors[0].id
  },
  {
    productId: mockProducts[1].id,
    colorId: mockProducts[1].colors[3].id
  },
  {
    productId: mockProducts[5].id,
    colorId: mockProducts[5].colors[0].id
  },
  {
    productId: mockProducts[7].id,
    colorId: mockProducts[7].colors[1].id
  }
];
