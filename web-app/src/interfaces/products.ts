import { Brand, mockBrands } from '@/interfaces/brands';
/**
 * Product object for an item (clothing, accessory, etc.)
 */
export interface Product {
  id: string;
  name: string;
  productSlug: string;
  brand: Brand;
  description?: string;
  shipping?: string;
  returns?: string;
  colorNotes?: string;
  sizeNotes?: string;
  colors: ColorVariant[];
}
/**
 * Version of a product with a specific color. Each product can have one or many ColorVariants
 */
export interface ColorVariant {
  colorName: string;
  price: number;
  discount?: Discount;
  images: {
    cover: string;
    additional?: string[];
  };
  sizes: SizeVariant[];
}
/**
 * Size and quantity availible for each ColorVariant
 */
interface SizeVariant {
  size: string;
  quantity: number;
}

export interface Discount {
  type: 'fixed' | 'percent';
  amount: number;
}
/**
 * Fake products to develop site with
 */
export const mockProducts: Product[] = [
  {
    id: '1',
    name: 'LIGHTWEIGHT BUCKLE PUFFER JACKET',
    productSlug: 'alyx-lightweight-buckle-puffer-jacket',
    brand: mockBrands[0],
    description:
      'Puffer jacket in a lightweight fabric with intergrated buckle collar closure',
    sizeNotes: 'Size up for oversized fit',
    colors: [
      {
        colorName: 'Black',
        price: 578,
        discount: {
          type: 'percent',
          amount: 10
        },
        images: {
          cover: '/mock/cover/puff_jacket_example.png'
        },
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
    productSlug: 'statement-stmt-hoodie',
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
        images: {
          cover: '/mock/cover/stmt-hoodie-black.png',
          additional: ['/mock/additional/stmt-size-chart.png']
        },
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
        images: {
          cover: '/mock/cover/stmt-hoodie-sky-blue.png'
        },
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
        images: { cover: '/mock/cover/stmt-hoodie-grey.png' },
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
        images: { cover: '/mock/cover/stmt-hoodie-purple.png' },
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
    productSlug: 'thirteen-studios-blank-sweatsuit-bundle',
    brand: mockBrands[5],
    colors: [
      {
        colorName: 'Black',
        price: 170,
        discount: {
          type: 'fixed',
          amount: 50
        },
        images: { cover: '/mock/cover/sweatsuit-black.png' },
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
        images: { cover: '/mock/cover/sweatsuit-green.png' },
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
        images: { cover: '/mock/cover/sweatsuit-brown.png' },
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
        images: { cover: '/mock/cover/sweatsuit-charcoal.png' },
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
        images: { cover: '/mock/cover/sweatsuit-blue.png' },
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
        images: { cover: '/mock/cover/sweatsuit-white.png' },
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
    productSlug: 'thirteen-studios-perfect-t-shirt',
    brand: mockBrands[5],
    colorNotes: 'Light Gray-ish even though it appears to be white',
    sizeNotes: 'Size up for looser fit',
    colors: [
      {
        colorName: 'Gray',
        price: 35,
        images: { cover: '/mock/cover/blank_tee.png' },
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
    productSlug: 'boohooman-cargo-pants',
    brand: mockBrands[1],
    colors: [
      {
        colorName: 'Black',
        price: 50,
        images: { cover: '/mock/cover/cargo_pants.jpg' },
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
    productSlug: 'boohooman-cargo-shorts',
    brand: mockBrands[1],
    colors: [
      {
        colorName: 'Black',
        price: 45,
        images: { cover: '/mock/cover/cargo_shorts.png' },
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
    productSlug: 'rich-usi-runner-heavyweight-hunter-hoodie',
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
        images: { cover: '/mock/cover/hunter_hoodie.jpg' },
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
    productSlug: 'nike-nike-tech-woven-oversized-pants',
    brand: mockBrands[2],
    description:
      'Crafted with stretchy woven material, these Nike Tech pants offer you ease of movement and adjustability. The wide-leg cut is paired with bungee locks at the ankles that let you switch up the fit.',
    colors: [
      {
        colorName: 'Black',
        price: 135,
        images: { cover: '/mock/cover/tech-pants-black.png' },
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
        images: { cover: '/mock/cover/tech-pants-beige.png' },
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
        images: { cover: '/mock/cover/tech-pants-iron-ore.png' },
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
    productSlug: 'nike-nike-tech-jacket',
    brand: mockBrands[2],
    colors: [
      {
        colorName: 'Black',
        price: 135,
        images: { cover: '/mock/cover/nike_tech_hoodie.png' },
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
    productSlug: 'boohooman-parachute-pants',
    brand: mockBrands[1],
    colors: [
      {
        colorName: 'Black',
        price: 90,
        images: { cover: '/mock/cover/parachute_pants.png' },
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
