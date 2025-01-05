import { Brand, mockBrands } from '@/interfaces/brands';

export interface Product {
  id: string;
  name: string;
  brand: Brand;
  description?: string;
  shipping?: string;
  returns?: string;
  colorNotes?: string;
  sizeNotes?: string;
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
    sizeNotes: 'Size up for oversized fit',
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
    shipping: 'Free shipping on orders over $50',
    returns:
      'All purchases and sales are final. No returns or size changes after shipment. If you receive the wrong size or wrong product, we are more than happy to help.',
    sizeNotes: 'Runs small so size down',
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
          { size: 'XS', quantity: 123 },
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
    colorNotes: 'Light Gray-ish even though it appears to be white',
    sizeNotes: 'Size up for looser fit',
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
      '- 20 Oz 100% Cotton Fleece\n- Garment Dyed-Vintage Black\n- Seams Flowing Across Hoodie\n- Boxy Fit (Choose your regular size or size up for an oversized fit)\n- Big Ass Hood\n- Two Way YKK Zipper',
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
