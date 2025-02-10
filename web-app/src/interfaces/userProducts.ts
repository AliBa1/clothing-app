import { BrandProduct, ColorVariant, mockProducts } from './brandProducts';

export interface CartProduct {
  // id: string;
  product: BrandProduct;
  color: ColorVariant;
  size: string;
  quantity: number;
}

export interface SavedProduct {
  // id: string;
  product: BrandProduct;
  color: ColorVariant;
}

export const cartProducts: CartProduct[] = [
  {
    product: mockProducts[1],
    color: mockProducts[1].colors[2],
    size: mockProducts[1].colors[2].sizes[2].size,
    quantity: 1
  },
  {
    product: mockProducts[8],
    color: mockProducts[8].colors[0],
    size: mockProducts[8].colors[0].sizes[3].size,
    quantity: 3
  },
  {
    product: mockProducts[1],
    color: mockProducts[1].colors[3],
    size: mockProducts[1].colors[3].sizes[1].size,
    quantity: 1
  },
];

export const savedProducts: SavedProduct[] = [
  {
    product: mockProducts[0],
    color: mockProducts[0].colors[0]
  },
  {
    product: mockProducts[1],
    color: mockProducts[1].colors[3]
  },
  {
    product: mockProducts[5],
    color: mockProducts[5].colors[0]
  },
  {
    product: mockProducts[7],
    color: mockProducts[7].colors[1]
  }
];
