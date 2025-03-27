import { Brand, mockBrands } from '@/interfaces/brands';
import {
  categories,
  CategoryKeys,
  subCategories,
  SubcategoryKeys,
  TypeKeys
} from './categories';
import { ColorOption } from './filters';
/**
 * Product object for an item (clothing, accessory, etc.)
 */
export interface BrandProduct {
  id: string;
  name: string;
  productSlug: string;
  brand: Brand;

  gender?: GenderKeys;
  fit?: FitKeys;

  categories: CategoryKeys[];
  subCategories: SubcategoryKeys[];
  types: TypeKeys[];

  description?: string;
  shipping?: string;
  returns?: string;
  sizeNotes?: string;

  colors: ColorVariant[];

  salesData?: SalesData;
  engagementData?: EngagementData;
  reviews?: Review[];
}

export type GenderKeys = keyof typeof genderLabels;
export const genderLabels = {
  any: 'Any',
  men: 'Men',
  women: 'Women'
};

export type FitKeys = keyof typeof fitLabels;
export const fitLabels = {
  regular: 'Regular',
  oversized: 'Oversized',
  skinny: 'Skinny',
  slim: 'Slim',
  relaxed: 'Relaxed',
  boxy: 'Boxy'
};

/**
 * Version of a product with a specific color. Each product can have one or many ColorVariants
 */
export interface ColorVariant {
  id: string;
  colorName: string;
  primaryColor: ColorOption;
  price: number;
  discount?: Discount;
  images: {
    cover: string;
    additional?: string[];
  };
  sizes: SizeVariant[];
  salesData?: SalesData;
  // engagementData?: EngagementData;
  availability?: Availability;
  visibility?: Visibility;
  releaseDate?: Date;
  releaseEndDate?: Date;
}

export const AVAILABILITY_OPTIONS = {
  preOrder: 'Pre Order',
  readyToShip: 'Ready to Ship'
};

export type Availability = keyof typeof AVAILABILITY_OPTIONS;

export const VISIBILITY_OPTIONS = {
  draft: 'Draft',
  private: 'Private',
  public: 'Public',
  archived: 'Archived'
};

export type Visibility = keyof typeof VISIBILITY_OPTIONS;

export interface Review {
  id: string;
  userId: string;
  rating: number;
  quality: number;
  fit: number;
  comment?: string;
  createdAt: Date;
  images?: string[];
  likes: number;
}

/**
 * Size and quantity availible for each ColorVariant
 */
export interface SizeVariant {
  size: string;
  quantity: number;
}

export interface Discount {
  type: 'fixed' | 'percent';
  amount: number;
}

export interface SalesData {
  totalSold: number;
  totalRevenue: number;
}

export interface EngagementData {
  views: number;
  saved: number;
  shared: number;
}

/**
 * Fake products to develop site with
 */
export const mockProducts: BrandProduct[] = [
  {
    id: '1',
    name: 'LIGHTWEIGHT BUCKLE PUFFER JACKET',
    productSlug: 'alyx-lightweight-buckle-puffer-jacket',
    brand: mockBrands[0],
    categories: [categories.tops.category],
    subCategories: [subCategories.outerwear.subcategory],
    types: ['pufferJackets'],
    description:
      'Puffer jacket in a lightweight fabric with intergrated buckle collar closure',
    sizeNotes: 'Size up for oversized fit',
    colors: [
      {
        id: '1',
        colorName: 'Black',
        primaryColor: {
          color: 'black',
          red: 46,
          green: 50,
          blue: 49
        },
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
    categories: [categories.tops.category],
    subCategories: [subCategories.outerwear.subcategory],
    types: ['hoodiesJackets', 'sweatshirts'],
    description: '100% COTTON FLEECE\n PUFFPRINT AND SCREENPRINT COMBO',
    shipping: 'Free shipping on orders over $50',
    returns:
      'All purchases and sales are final. No returns or size changes after shipment. If you receive the wrong size or wrong product, we are more than happy to help.',
    sizeNotes: 'Runs small so size down',
    colors: [
      {
        id: '2',
        colorName: 'Black',
        primaryColor: {
          color: 'black',
          red: 18,
          green: 18,
          blue: 18
        },
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
        id: '3',
        colorName: 'Sky Blue',
        primaryColor: {
          color: 'blue',
          red: 91,
          green: 144,
          blue: 193
        },
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
        id: '4',
        colorName: 'Grey',
        primaryColor: {
          color: 'grey',
          red: 85,
          green: 83,
          blue: 80
        },
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
        id: '5',
        colorName: 'Purple',
        primaryColor: {
          color: 'purple',
          red: 93,
          green: 70,
          blue: 160
        },
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
    categories: [categories.tops.category, categories.bottoms.category],
    subCategories: [
      subCategories.outerwear.subcategory,
      subCategories.pants.subcategory
    ],
    types: ['hoodiesJackets', 'sweatshirts', 'sweatpantsJoggers'],
    colors: [
      {
        id: '6',
        colorName: 'Black',
        primaryColor: {
          color: 'black',
          red: 46,
          green: 46,
          blue: 49
        },
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
        id: '7',
        colorName: 'Green',
        primaryColor: {
          color: 'black',
          red: 50,
          green: 72,
          blue: 61
        },
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
        id: '8',
        colorName: 'Brown',
        primaryColor: {
          color: 'brown',
          red: 62,
          green: 48,
          blue: 38
        },
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
        id: '9',
        colorName: 'Charcoal',
        primaryColor: {
          color: 'grey',
          red: 85,
          green: 91,
          blue: 109
        },
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
        id: '10',
        colorName: 'Blue',
        primaryColor: {
          color: 'blue',
          red: 29,
          green: 75,
          blue: 182
        },
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
        id: '11',
        colorName: 'White',
        primaryColor: {
          color: 'white',
          red: 194,
          green: 191,
          blue: 183
        },
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
    categories: [categories.tops.category],
    subCategories: [subCategories.tShirt.subcategory],
    types: ['shortSleeveTees'],
    sizeNotes: 'Size up for looser fit',
    colors: [
      {
        id: '12',
        colorName: 'Gray',
        primaryColor: {
          color: 'grey',
          red: 198,
          green: 198,
          blue: 196
        },
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
    categories: [categories.bottoms.category],
    subCategories: [subCategories.pants.subcategory],
    types: ['cargoPants'],
    colors: [
      {
        id: '13',
        colorName: 'Black',
        primaryColor: {
          color: 'black',
          red: 46,
          green: 50,
          blue: 49
        },
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
    categories: [categories.bottoms.category],
    subCategories: [subCategories.shorts.subcategory],
    types: ['cargoShorts'],
    colors: [
      {
        id: '15',
        colorName: 'Black',
        primaryColor: {
          color: 'black',
          red: 32,
          green: 33,
          blue: 34
        },
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
    categories: [categories.tops.category],
    subCategories: [subCategories.outerwear.subcategory],
    types: ['hoodiesJackets'],
    description:
      '- 20 Oz 100% Cotton Fleece\n- Garment Dyed-Vintage Black\n- Seams Flowing Across Hoodie\n- Boxy Fit (Choose your regular size or size up for an oversized fit)\n- Big Ass Hood\n- Two Way YKK Zipper',
    colors: [
      {
        id: '16',
        colorName: 'Black',
        primaryColor: {
          color: 'black',
          red: 46,
          green: 44,
          blue: 48
        },
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
    categories: [categories.bottoms.category],
    subCategories: [subCategories.pants.subcategory],
    types: ['trackPants'],
    description:
      'Crafted with stretchy woven material, these Nike Tech pants offer you ease of movement and adjustability. The wide-leg cut is paired with bungee locks at the ankles that let you switch up the fit.',
    colors: [
      {
        id: '17',
        colorName: 'Black',
        primaryColor: {
          color: 'black',
          red: 38,
          green: 34,
          blue: 33
        },
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
        id: '18',
        colorName: 'Beige',
        primaryColor: {
          color: 'tan',
          red: 214,
          green: 187,
          blue: 149
        },
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
        id: '19',
        colorName: 'Iron Ore',
        primaryColor: {
          color: 'grey',
          red: 137,
          green: 131,
          blue: 128
        },
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
    categories: [categories.tops.category],
    subCategories: [subCategories.outerwear.subcategory],
    types: ['hoodiesJackets'],
    colors: [
      {
        id: '21',
        colorName: 'Black',
        primaryColor: {
          color: 'black',
          red: 35,
          green: 34,
          blue: 39
        },
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
    categories: [categories.bottoms.category],
    subCategories: [subCategories.pants.subcategory],
    types: ['trackPants'],
    colors: [
      {
        id: '20',
        colorName: 'Black',
        primaryColor: {
          color: 'black',
          red: 52,
          green: 52,
          blue: 50
        },
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

export const blankProduct: BrandProduct = {
  id: '',
  name: '',
  productSlug: '',
  brand: {
    id: '',
    name: '',
    handle: '',
    logo: '',
    bio: '',
    links: {}
  },
  categories: [],
  subCategories: [],
  types: [],
  colors: []
};

export const blankColorVariant: ColorVariant = {
  id: '',
  colorName: '',
  primaryColor: {
    color: 'black',
    red: 0,
    green: 0,
    blue: 0
  },
  price: 0,
  images: {
    cover: ''
  },
  sizes: []
};
