import { GenderKeys, FitKeys } from './brandProducts';
import { CategoryKeys, SubcategoryKeys, TypeKeys } from './categories';

/**
 * Filters that can be selected by users to specifiy what they see on shop page
 */
export interface Filters {
  // Old method
  // category?: Category;
  // subCategory?: Subcategory;
  // types?: LabelValue[];
  // sort: SortOption;
  // gender: GenderOption;
  // fit: FitOption[];
  // inventory: InventoryOption;
  // color: ColorOption[];

  // New method
  categories?: CategoryKeys[];
  subCategories?: SubcategoryKeys[];
  types?: TypeKeys[];
  sort: SortKeys;
  gender: GenderKeys;
  fit: FitKeys[];
  availability: AvailabilityKeys;
  color: ColorKeys[];

  minPrice: number;
  maxPrice: number;
}

export type SortKeys = keyof typeof sortLabels;
export const sortLabels = {
  default: 'Default',
  popular: 'Popular',
  new: 'New',
  lowToHighPrice: 'Price: Low to High',
  highToLowPrice: 'Price: High to Low'
};

export type AvailabilityKeys = keyof typeof availabilityLabels;
export const availabilityLabels = {
  any: 'Any',
  readyToShip: 'Ready to Ship',
  preOrder: 'Pre-Order'
};

export type ColorKeys = keyof typeof colorLabels;
export const colorLabels = {
  black: 'Black',
  white: 'White',
  red: 'Red',
  blue: 'Blue',
  green: 'Green',
  yellow: 'Yellow',
  purple: 'Purple',
  brown: 'Brown',
  grey: 'Grey',
  orange: 'Orange',
  pink: 'Pink',
  burgandy: 'Burgandy',
  tan: 'Tan',
  multicolor: 'Multicolor'
};

export interface ColorOption {
  color: ColorKeys;
  red: number;
  green: number;
  blue: number;
}

export const colorOptions: ColorOption[] = [
  {
    color: 'black',
    red: 0,
    green: 0,
    blue: 0
  },
  {
    color: 'white',
    red: 255,
    green: 255,
    blue: 255
  },
  {
    color: 'red',
    red: 255,
    green: 0,
    blue: 0
  },
  {
    color: 'blue',
    red: 0,
    green: 0,
    blue: 255
  },
  {
    color: 'green',
    red: 0,
    green: 255,
    blue: 0
  },
  {
    color: 'yellow',
    red: 255,
    green: 255,
    blue: 0
  },
  {
    color: 'purple',
    red: 128,
    green: 0,
    blue: 128
  },
  {
    color: 'brown',
    red: 165,
    green: 42,
    blue: 42
  },
  {
    color: 'grey',
    red: 128,
    green: 128,
    blue: 128
  },
  {
    color: 'orange',
    red: 255,
    green: 165,
    blue: 0
  },
  {
    color: 'pink',
    red: 255,
    green: 192,
    blue: 203
  },
  {
    color: 'burgandy',
    red: 128,
    green: 0,
    blue: 32
  },
  {
    color: 'tan',
    red: 210,
    green: 180,
    blue: 140
  },
  {
    color: 'multicolor',
    red: 255,
    green: 255,
    blue: 255
  }
];

/**
 * Default filters before changed or when cleared
 */
export const mockDefaultFilters: Filters = {
  categories: [],
  subCategories: [],
  types: [],
  sort: 'default',
  gender: 'any',
  fit: [],
  // inventory: inventoryOptions[0],
  availability: 'any',
  color: [],
  minPrice: 0,
  maxPrice: 999999
};
