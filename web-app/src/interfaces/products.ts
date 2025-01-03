import { Brand, mockBrands } from '@/interfaces/brands';

// interface Variant {
//   size: string;
//   color: string;
//   quantity: number;
// }

// export interface Product {
//   id: number;
//   brand: Brand;
//   name: string;
//   price: number;
//   coverImg: string;
//   variants: Variant[];
// }

// export const mockProducts: Product[] = [
//   {
//     id: 1,
//     brand: mockBrands[0],
//     name: 'Puffer Jacket',
//     price: 120,
//     coverImg: '/mock/cover/puff_jacket_example.png',
//     variants: [
//       { size: 'S', color: 'Black', quantity: 120 },
//       { size: 'M', color: 'Black', quantity: 120 },
//       { size: 'L', color: 'Black', quantity: 120 }
//     ]
//   },
//   {
//     id: 2,
//     brand: mockBrands[4],
//     name: 'Statement Hoodie',
//     price: 60,
//     coverImg: '/mock/cover/hoodie_example.jpeg',
//     variants: [
//       { size: 'S', color: 'Black', quantity: 120 },
//       { size: 'M', color: 'Black', quantity: 120 },
//       { size: 'L', color: 'Black', quantity: 120 }
//     ]
//   },
//   {
//     id: 3,
//     brand: mockBrands[5],
//     name: 'Blank Sweatsuit',
//     price: 110,
//     coverImg: '/mock/cover/blank_sweatsuit.jpeg',
//     variants: [
//       { size: 'S', color: 'Black', quantity: 120 },
//       { size: 'M', color: 'Black', quantity: 120 },
//       { size: 'L', color: 'Black', quantity: 120 },
//       { size: 'S', color: 'Green', quantity: 60 },
//       { size: 'M', color: 'Green', quantity: 60 },
//       { size: 'L', color: 'Green', quantity: 60 }
//     ]
//   },
//   {
//     id: 4,
//     brand: mockBrands[5],
//     name: 'Perfect T-shirt',
//     price: 35,
//     coverImg: '/mock/cover/blank_tee.png',
//     variants: [
//       { size: 'S', color: 'Black', quantity: 120 },
//       { size: 'M', color: 'Black', quantity: 120 },
//       { size: 'L', color: 'Black', quantity: 120 },
//       { size: 'S', color: 'White', quantity: 120 },
//       { size: 'M', color: 'White', quantity: 120 },
//       { size: 'L', color: 'White', quantity: 120 },
//       { size: 'S', color: 'Blue', quantity: 120 },
//       { size: 'M', color: 'Blue', quantity: 120 },
//       { size: 'L', color: 'Blue', quantity: 120 }
//     ]
//   },
//   {
//     id: 5,
//     brand: mockBrands[1],
//     name: 'Cargo Pants',
//     price: 90,
//     coverImg: '/mock/cover/cargo_pants.jpg',
//     variants: [
//       { size: 'XS', color: 'Black', quantity: 120 },
//       { size: 'S', color: 'Black', quantity: 120 },
//       { size: 'M', color: 'Black', quantity: 120 },
//       { size: 'L', color: 'Black', quantity: 120 },
//       { size: 'XL', color: 'Black', quantity: 120 },
//       { size: 'XXL', color: 'Black', quantity: 120 }
//     ]
//   },
//   {
//     id: 6,
//     brand: mockBrands[1],
//     name: 'Cargo Shorts',
//     price: 70,
//     coverImg: '/mock/cover/cargo_shorts.png',
//     variants: [
//       { size: 'S', color: 'Black', quantity: 120 },
//       { size: 'M', color: 'Black', quantity: 120 },
//       { size: 'L', color: 'Black', quantity: 120 },
//       { size: 'XL', color: 'Black', quantity: 120 }
//     ]
//   },
//   {
//     id: 7,
//     brand: mockBrands[3],
//     name: 'Hunter Hoodie',
//     price: 90,
//     coverImg: '/mock/cover/hunter_hoodie.jpg',
//     variants: [
//       { size: 'S', color: 'Black', quantity: 120 },
//       { size: 'M', color: 'Black', quantity: 120 },
//       { size: 'L', color: 'Black', quantity: 120 }
//     ]
//   },
//   {
//     id: 8,
//     brand: mockBrands[2],
//     name: 'Nike Oversized Tech Pants',
//     price: 135,
//     coverImg: '/mock/cover/nike_oversize_pants.png',
//     variants: [
//       { size: 'S', color: 'Black', quantity: 120 },
//       { size: 'M', color: 'Black', quantity: 120 },
//       { size: 'L', color: 'Black', quantity: 120 }
//     ]
//   },
//   {
//     id: 9,
//     brand: mockBrands[2],
//     name: 'Nike Tech Jacket',
//     price: 135,
//     coverImg: '/mock/cover/nike_tech_hoodie.png',
//     variants: [
//       { size: 'S', color: 'Black', quantity: 120 },
//       { size: 'M', color: 'Black', quantity: 120 },
//       { size: 'L', color: 'Black', quantity: 120 }
//     ]
//   },
//   {
//     id: 10,
//     brand: mockBrands[1],
//     name: 'Parachute Pants',
//     price: 90,
//     coverImg: '/mock/cover/parachute_pants.png',
//     variants: [
//       { size: 'S', color: 'Black', quantity: 120 },
//       { size: 'M', color: 'Black', quantity: 120 },
//       { size: 'L', color: 'Black', quantity: 120 }
//     ]
//   }
// ];

// NEW STRUCTURE
export interface Product {
  id: string;
  name: string;
  brand: Brand;
  description?: string;
  colors: ColorVariant[];
}

export interface ColorVariant {
  colorName: string;
  price: number;
  discount?: Discount;
  coverImg: string;
  sizes: SizeVariant[];
}

interface SizeVariant {
  size: string;
  quantity: number;
}

export interface Discount {
  type: 'fixed' | 'percent';
  amount: number;
}

export const mockProducts: Product[] = [
  {
    id: '1',
    name: 'LIGHTWEIGHT BUCKLE PUFFER JACKET',
    brand: mockBrands[0],
    description: 'Puffer jacket in a lightweight fabric with intergrated buckle collar closure',
    colors: [
      {
        colorName: 'Black',
        price: 578,
        discount: {
          type: 'percent',
          amount: 10
        },
        coverImg: '/mock/cover/puff_jacket_example.png',
        sizes: [
          { size: 'XS', quantity: 0 },
          { size: 'S', quantity: 123 },
          { size: 'M', quantity: 54 },
          { size: 'L', quantity: 32 },
          { size: 'XL', quantity: 145 }
        ]
      }
    ]
  },
  {
    id: '2',
    name: 'STMT Hoodie',
    brand: mockBrands[4],
    description: '100% COTTON FLEECE\n PUFFPRINT AND SCREENPRINT COMBO',
    colors: [
      {
        colorName: 'Black',
        price: 77,
        discount: {
          type: 'percent',
          amount: 25
        },
        coverImg: '/mock/cover/stmt-hoodie-black.png',
        sizes: [
          { size: 'XS', quantity: 0 },
          { size: 'S', quantity: 4324 },
          { size: 'M', quantity: 123 },
          { size: 'L', quantity: 123 },
          { size: 'XL', quantity: 43242 },
          { size: 'XXL', quantity: 0 }
        ]
      },
      {
        colorName: 'Sky Blue',
        price: 77,
        discount: {
          type: 'percent',
          amount: 25
        },
        coverImg: '/mock/cover/stmt-hoodie-sky-blue.png',
        sizes: [
          { size: 'S', quantity: 120 },
          { size: 'M', quantity: 120 },
          { size: 'L', quantity: 120 }
        ]
      },
      {
        colorName: 'Grey',
        price: 77,
        discount: {
          type: 'percent',
          amount: 25
        },
        coverImg: '/mock/cover/stmt-hoodie-grey.png',
        sizes: [
          { size: 'S', quantity: 120 },
          { size: 'M', quantity: 120 },
          { size: 'L', quantity: 120 }
        ]
      },
      {
        colorName: 'Purple',
        price: 77,
        discount: {
          type: 'percent',
          amount: 25
        },
        coverImg: '/mock/cover/stmt-hoodie-purple.png',
        sizes: [
          { size: 'S', quantity: 120 },
          { size: 'M', quantity: 120 },
          { size: 'L', quantity: 120 }
        ]
      }
    ]
  },
  {
    id: '3',
    name: 'Blank Sweatsuit Bundle',
    brand: mockBrands[5],
    colors: [
      {
        colorName: 'Black',
        price: 170,
        discount: {
          type: 'fixed',
          amount: 50
        },
        coverImg: '/mock/cover/sweatsuit-black.png',
        sizes: [
          { size: 'S', quantity: 120 },
          { size: 'M', quantity: 120 },
          { size: 'L', quantity: 120 }
        ]
      },
      {
        colorName: 'Green',
        price: 170,
        discount: {
          type: 'fixed',
          amount: 50
        },
        coverImg: '/mock/cover/sweatsuit-green.png',
        sizes: [
          { size: 'S', quantity: 120 },
          { size: 'M', quantity: 120 },
          { size: 'L', quantity: 120 }
        ]
      },
      {
        colorName: 'Brown',
        price: 170,
        discount: {
          type: 'fixed',
          amount: 50
        },
        coverImg: '/mock/cover/sweatsuit-brown.png',
        sizes: [
          { size: 'S', quantity: 120 },
          { size: 'M', quantity: 120 },
          { size: 'L', quantity: 120 }
        ]
      },
      {
        colorName: 'Charcoal',
        price: 170,
        discount: {
          type: 'fixed',
          amount: 50
        },
        coverImg: '/mock/cover/sweatsuit-charcoal.png',
        sizes: [
          { size: 'S', quantity: 120 },
          { size: 'M', quantity: 120 },
          { size: 'L', quantity: 120 }
        ]
      },
      {
        colorName: 'Blue',
        price: 170,
        discount: {
          type: 'fixed',
          amount: 50
        },
        coverImg: '/mock/cover/sweatsuit-blue.png',
        sizes: [
          { size: 'S', quantity: 120 },
          { size: 'M', quantity: 120 },
          { size: 'L', quantity: 120 }
        ]
      },
      {
        colorName: 'White',
        price: 170,
        discount: {
          type: 'fixed',
          amount: 50
        },
        coverImg: '/mock/cover/sweatsuit-white.png',
        sizes: [
          { size: 'S', quantity: 120 },
          { size: 'M', quantity: 120 },
          { size: 'L', quantity: 120 }
        ]
      }
    ]
  },
  {
    id: '4',
    name: 'Perfect T-shirt',
    brand: mockBrands[5],
    colors: [
      {
        colorName: 'Gray',
        price: 35,
        coverImg: '/mock/cover/blank_tee.png',
        sizes: [
          { size: 'S', quantity: 120 },
          { size: 'M', quantity: 120 },
          { size: 'L', quantity: 120 }
        ]
      }
    ]
  },
  {
    id: '5',
    name: 'Cargo Pants',
    brand: mockBrands[1],
    colors: [
      {
        colorName: 'Black',
        price: 50,
        coverImg: '/mock/cover/cargo_pants.jpg',
        sizes: [
          { size: 'S', quantity: 189 },
          { size: 'M', quantity: 412 },
          { size: 'L', quantity: 123 },
          { size: 'XL', quantity: 324 }
        ]
      }
    ]
  },
  {
    id: '6',
    name: 'Cargo Shorts',
    brand: mockBrands[1],
    colors: [
      {
        colorName: 'Black',
        price: 45,
        coverImg: '/mock/cover/cargo_shorts.png',
        sizes: [
          { size: 'S', quantity: 189 },
          { size: 'M', quantity: 412 },
          { size: 'L', quantity: 123 },
          { size: 'XL', quantity: 324 }
        ]
      }
    ]
  },
  {
    id: '7',
    name: 'Runner Heavyweight Hunter Hoodie',
    brand: mockBrands[3],
    description:
      '20 Oz 100% Cotton Fleece\nGarment Dyed-Vintage Black\nSeams Flowing Across Hoodie\nBoxy Fit (Choose your regular size or size up for an oversized fit)\nBig Ass Hood\nTwo Way YKK Zipper',
    colors: [
      {
        colorName: 'Black',
        price: 195,
        discount: {
          type: 'fixed',
          amount: 55
        },
        coverImg: '/mock/cover/hunter_hoodie.jpg',
        sizes: [
          { size: 'S', quantity: 124 },
          { size: 'M', quantity: 124 },
          { size: 'L', quantity: 124 },
          { size: 'XL', quantity: 124 }
        ]
      }
    ]
  },
  {
    id: '8',
    name: 'Nike Tech Woven Oversized Pants',
    brand: mockBrands[2],
    description:
      'Crafted with stretchy woven material, these Nike Tech pants offer you ease of movement and adjustability. The wide-leg cut is paired with bungee locks at the ankles that let you switch up the fit.',
    colors: [
      {
        colorName: 'Black',
        price: 135,
        coverImg: '/mock/cover/tech-pants-black.png',
        sizes: [
          { size: 'XS', quantity: 0 },
          { size: 'S', quantity: 0 },
          { size: 'M', quantity: 234235 },
          { size: 'L', quantity: 23514 },
          { size: 'XL', quantity: 123123 },
          { size: 'XXL', quantity: 13123 },
          { size: '3XL', quantity: 0 }
        ]
      },
      {
        colorName: 'Beige',
        price: 135,
        coverImg: '/mock/cover/tech-pants-beige.png',
        sizes: [
          { size: 'XS', quantity: 324235 },
          { size: 'S', quantity: 25234 },
          { size: 'M', quantity: 234235 },
          { size: 'L', quantity: 23514 },
          { size: 'XL', quantity: 123123 },
          { size: 'XXL', quantity: 0 },
          { size: '3XL', quantity: 0 }
        ]
      },
      {
        colorName: 'Iron Ore',
        price: 135,
        coverImg: '/mock/cover/tech-pants-iron-ore.png',
        sizes: [
          { size: 'XS', quantity: 324235 },
          { size: 'S', quantity: 25234 },
          { size: 'M', quantity: 0 },
          { size: 'L', quantity: 23514 },
          { size: 'XL', quantity: 0 },
          { size: 'XXL', quantity: 0 },
          { size: '3XL', quantity: 2324 }
        ]
      }
    ]
  },
  {
    id: '9',
    name: 'Nike Tech Jacket',
    brand: mockBrands[2],
    colors: [
      {
        colorName: 'Black',
        price: 135,
        coverImg: '/mock/cover/nike_tech_hoodie.png',
        sizes: [
          { size: 'XS', quantity: 124143 },
          { size: 'S', quantity: 12314 },
          { size: 'M', quantity: 234235 },
          { size: 'L', quantity: 23514 },
          { size: 'XL', quantity: 123123 },
          { size: 'XXL', quantity: 13123 },
          { size: '3XL', quantity: 0 }
        ]
      }
    ]
  },
  {
    id: '10',
    name: 'Parachute Pants',
    brand: mockBrands[1],
    colors: [
      {
        colorName: 'Black',
        price: 90,
        coverImg: '/mock/cover/parachute_pants.png',
        sizes: [
          { size: 'S', quantity: 123 },
          { size: 'M', quantity: 24 },
          { size: 'L', quantity: 41 },
          { size: 'XL', quantity: 23 }
        ]
      }
    ]
  }
];
