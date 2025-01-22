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
  value: 'any' | 'readyToShip' | 'outOfStock' | 'preOrder' | 'lowStock' | 'upcoming';
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
  minPrice: 0,
  maxPrice: 999999
};
