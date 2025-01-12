import { Category, CategoryOption, Subcategory } from './categories';

export interface Filters {
  category?: Category;
  subCategory?: Subcategory;
  types?: CategoryOption[];
  sort: 'default' | 'new' | 'popular' | 'lowToHighPrice' | 'highToLowPrice';
  gender: 'mens' | 'womens' | 'unisex' | 'kids';
  fit?: 'skinny' | 'slim' | 'regular' | 'relaxed' | 'oversized' | 'boxy';
  stock?: 'inStock' | 'preOrder' | 'lowStock';
  minPrice?: number;
  maxPrice?: number;
}
