import { Brand, mockBrands } from '@/interfaces/brands';

interface Variant {
  size: string;
  color: string;
  quantity: number;
}

export interface Product {
  id: number;
  brand: Brand;
  name: string;
  price: number;
  coverImg: string;
  variants: Variant[];
}

export const mockProducts: Product[] = [
  {
    id: 1,
    brand: mockBrands[0],
    name: 'Puffer Jacket',
    price: 120,
    coverImg: '/mock/cover/puff_jacket_example.png',
    variants: [
      { size: 'S', color: 'Black', quantity: 120 },
      { size: 'M', color: 'Black', quantity: 120 },
      { size: 'L', color: 'Black', quantity: 120 }
    ]
  },
  {
    id: 2,
    brand: mockBrands[4],
    name: 'Statement Hoodie',
    price: 60,
    coverImg: '/mock/cover/hoodie_example.jpeg',
    variants: [
      { size: 'S', color: 'Black', quantity: 120 },
      { size: 'M', color: 'Black', quantity: 120 },
      { size: 'L', color: 'Black', quantity: 120 }
    ]
  },
  {
    id: 3,
    brand: mockBrands[5],
    name: 'Blank Sweatsuit',
    price: 110,
    coverImg: '/mock/cover/blank_sweatsuit.jpeg',
    variants: [
      { size: 'S', color: 'Black', quantity: 120 },
      { size: 'M', color: 'Black', quantity: 120 },
      { size: 'L', color: 'Black', quantity: 120 },
      { size: 'S', color: 'Green', quantity: 60 },
      { size: 'M', color: 'Green', quantity: 60 },
      { size: 'L', color: 'Green', quantity: 60 }
    ]
  },
  {
    id: 4,
    brand: mockBrands[5],
    name: 'Perfect T-shirt',
    price: 35,
    coverImg: '/mock/cover/blank_tee.png',
    variants: [
      { size: 'S', color: 'Black', quantity: 120 },
      { size: 'M', color: 'Black', quantity: 120 },
      { size: 'L', color: 'Black', quantity: 120 },
      { size: 'S', color: 'White', quantity: 120 },
      { size: 'M', color: 'White', quantity: 120 },
      { size: 'L', color: 'White', quantity: 120 },
      { size: 'S', color: 'Blue', quantity: 120 },
      { size: 'M', color: 'Blue', quantity: 120 },
      { size: 'L', color: 'Blue', quantity: 120 }
    ]
  },
  {
    id: 5,
    brand: mockBrands[1],
    name: 'Cargo Pants',
    price: 90,
    coverImg: '/mock/cover/cargo_pants.jpg',
    variants: [
      { size: 'XS', color: 'Black', quantity: 120 },
      { size: 'S', color: 'Black', quantity: 120 },
      { size: 'M', color: 'Black', quantity: 120 },
      { size: 'L', color: 'Black', quantity: 120 },
      { size: 'XL', color: 'Black', quantity: 120 },
      { size: 'XXL', color: 'Black', quantity: 120 }
    ]
  },
  {
    id: 6,
    brand: mockBrands[1],
    name: 'Cargo Shorts',
    price: 70,
    coverImg: '/mock/cover/cargo_shorts.png',
    variants: [
      { size: 'S', color: 'Black', quantity: 120 },
      { size: 'M', color: 'Black', quantity: 120 },
      { size: 'L', color: 'Black', quantity: 120 },
      { size: 'XL', color: 'Black', quantity: 120 }
    ]
  },
  {
    id: 7,
    brand: mockBrands[3],
    name: 'Hunter Hoodie',
    price: 90,
    coverImg: '/mock/cover/hunter_hoodie.jpg',
    variants: [
      { size: 'S', color: 'Black', quantity: 120 },
      { size: 'M', color: 'Black', quantity: 120 },
      { size: 'L', color: 'Black', quantity: 120 }
    ]
  },
  {
    id: 8,
    brand: mockBrands[2],
    name: 'Nike Oversized Tech Pants',
    price: 135,
    coverImg: '/mock/cover/nike_oversize_pants.png',
    variants: [
      { size: 'S', color: 'Black', quantity: 120 },
      { size: 'M', color: 'Black', quantity: 120 },
      { size: 'L', color: 'Black', quantity: 120 }
    ]
  },
  {
    id: 9,
    brand: mockBrands[2],
    name: 'Nike Tech Jacket',
    price: 135,
    coverImg: '/mock/cover/nike_tech_hoodie.png',
    variants: [
      { size: 'S', color: 'Black', quantity: 120 },
      { size: 'M', color: 'Black', quantity: 120 },
      { size: 'L', color: 'Black', quantity: 120 }
    ]
  },
  {
    id: 10,
    brand: mockBrands[1],
    name: 'Parachute Pants',
    price: 90,
    coverImg: '/mock/cover/parachute_pants.png',
    variants: [
      { size: 'S', color: 'Black', quantity: 120 },
      { size: 'M', color: 'Black', quantity: 120 },
      { size: 'L', color: 'Black', quantity: 120 }
    ]
  }
];





// NEW STRUCTURE
// interface Product {
//   id: string;
//   name: string;
//   brand: Brand;
//   description?: string;
//   colors: ColorVariant[];
// }

// interface ColorVariant {
//   colorName: string;
//   price: number;
//   coverImg: string;
//   sizes: SizeVariant[];
// }

// interface SizeVariant {
//   size: string;
//   quantity: number;
// }

// export const mockProducts: Product[] = [
//   {
//     id: '1',
//     name: 'Puffer Jacket',
//     brand: mockBrands[0],
//     colors: [
//       {
//         colorName: 'Black',
//         price: 120,
//         coverImg: '/mock/cover/puff_jacket_example.png',
//         sizes: [
//           { size: 'S', quantity: 120 },
//           { size: 'M', quantity: 120 },
//           { size: 'L', quantity: 120 }
//         ]
//       }
//     ]
//   }
// ];
