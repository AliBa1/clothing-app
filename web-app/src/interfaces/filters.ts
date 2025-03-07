import { Category, Subcategory } from './categories';
import { LabelValue } from './other';

export interface SortOption {
  label: string;
  value: 'default' | 'new' | 'popular' | 'lowToHighPrice' | 'highToLowPrice';
}

export interface GenderOption {
  label: string;
  value: 'any' | 'men' | 'women' | 'unisex' | 'kids';
}

export interface FitOption {
  label: string;
  value: 'skinny' | 'slim' | 'regular' | 'relaxed' | 'oversized' | 'boxy';
}

export interface InventoryOption {
  label: string;
  value:
    | 'any'
    | 'readyToShip'
    | 'outOfStock'
    | 'preOrder'
    | 'lowStock'
    | 'upcoming';
}

export interface ColorOption {
  // Color or Multicolor interfaces from products
  label: string;
  value:
    | 'black'
    | 'white'
    | 'red'
    | 'blue'
    | 'green'
    | 'yellow'
    | 'purple'
    | 'brown'
    | 'grey'
    | 'orange'
    | 'pink'
    | 'burgandy'
    | 'tan'
    | 'multicolor';
  red: number;
  green: number;
  blue: number;
}
/**
 * Filters that can be selected by users to specifiy what they see on shop page
 */
export interface Filters {
  category?: Category;
  subCategory?: Subcategory;
  types?: LabelValue[];
  sort: SortOption;
  gender: GenderOption;
  fit: FitOption[];
  inventory: InventoryOption;
  color: ColorOption[];
  minPrice: number;
  maxPrice: number;
}

/**
 * Options user has to sort all items by when viewing
 */
export const sortOptions: SortOption[] = [
  {
    label: 'Default',
    value: 'default'
  },
  {
    label: 'New',
    value: 'new'
  },
  {
    label: 'Popular',
    value: 'popular'
  },
  {
    label: 'Price: Low to High',
    value: 'lowToHighPrice'
  },
  {
    label: 'Price: High to Low',
    value: 'highToLowPrice'
  }
];

/**
 * Options user has to sort all genders by when viewing
 */
export const genderOptions: GenderOption[] = [
  {
    label: 'Any',
    value: 'any'
  },
  {
    label: 'Men',
    value: 'men'
  },
  {
    label: 'Women',
    value: 'women'
  },
  {
    label: 'Unisex',
    value: 'unisex'
  },
  {
    label: 'Kids',
    value: 'kids'
  }
];

/**
 * Options user has to sort how item fits when viewing
 */
export const fitOptions: FitOption[] = [
  {
    label: 'Boxy',
    value: 'boxy'
  },
  {
    label: 'Oversized',
    value: 'oversized'
  },
  {
    label: 'Regular',
    value: 'regular'
  },
  {
    label: 'Relaxed',
    value: 'relaxed'
  },
  {
    label: 'Skinny',
    value: 'skinny'
  },
  {
    label: 'Slim',
    value: 'slim'
  }
];

/**
 * Options user has to sort all items by inventory when viewing
 */
export const inventoryOptions: InventoryOption[] = [
  {
    label: 'Any',
    value: 'any'
  },
  {
    label: 'Ready to Ship',
    value: 'readyToShip'
  },
  {
    label: 'Pre-Order',
    value: 'preOrder'
  },
  {
    label: 'Low Stock',
    value: 'lowStock'
  },
  {
    label: 'Out of Stock',
    value: 'outOfStock'
  },
  {
    label: 'Upcoming',
    value: 'upcoming'
  }
];

export const colorOptions: ColorOption[] = [
  {
    label: 'Black',
    value: 'black',
    red: 0,
    green: 0,
    blue: 0
  },
  {
    label: 'White',
    value: 'white',
    red: 255,
    green: 255,
    blue: 255
  },
  {
    label: 'Red',
    value: 'red',
    red: 255,
    green: 0,
    blue: 0
  },
  {
    label: 'Blue',
    value: 'blue',
    red: 0,
    green: 0,
    blue: 255
  },
  {
    label: 'Green',
    value: 'green',
    red: 0,
    green: 255,
    blue: 0
  },
  {
    label: 'Yellow',
    value: 'yellow',
    red: 255,
    green: 255,
    blue: 0
  },
  {
    label: 'Purple',
    value: 'purple',
    red: 128,
    green: 0,
    blue: 128
  },
  {
    label: 'Brown',
    value: 'brown',
    red: 165,
    green: 42,
    blue: 42
  },
  {
    label: 'Grey',
    value: 'grey',
    red: 128,
    green: 128,
    blue: 128
  },
  {
    label: 'Orange',
    value: 'orange',
    red: 255,
    green: 165,
    blue: 0
  },
  {
    label: 'Pink',
    value: 'pink',
    red: 255,
    green: 192,
    blue: 203
  },
  {
    label: 'Burgandy',
    value: 'burgandy',
    red: 128,
    green: 0,
    blue: 32
  },
  {
    label: 'Tan',
    value: 'tan',
    red: 210,
    green: 180,
    blue: 140
  },
  {
    label: 'Multicolor',
    value: 'multicolor',
    red: 255,
    green: 255,
    blue: 255
  }
];

/**
 * Default filters before changed or when cleared
 */
export const mockDefaultFilters: Filters = {
  category: undefined,
  subCategory: undefined,
  types: [],
  sort: sortOptions[0],
  gender: genderOptions[0],
  fit: [],
  inventory: inventoryOptions[0],
  color: [],
  minPrice: 0,
  maxPrice: 999999
};

export type SortKeys = keyof typeof sortLabels;
export const sortLabels = {
  default: 'Default',
  popular: 'Popular',
  new: 'New'
};

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
