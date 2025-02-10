'use client';
import Modal from '@/components/Modal';
import ProductCard from '@/components/ProductCard';
import {
  ColorOption,
  colorOptions,
  Filters,
  FitOption,
  fitOptions,
  GenderOption,
  genderOptions,
  InventoryOption,
  inventoryOptions,
  mockDefaultFilters,
  SortOption,
  sortOptions
} from '@/interfaces/filters';
import { mockProducts } from '@/interfaces/brandProducts';
import { useState } from 'react';
import Form from 'next/form';
import { useSearchParams } from 'next/navigation';
import AccordionRadio from '@/components/AccordionRadio';
import AccordionCheckbox from '@/components/AccordionCheckbox';
import { categories } from '@/interfaces/categories';

interface OpenFilters {
  sort: boolean;
  gender: boolean;
  type: boolean;
  fit: boolean;
  inventory: boolean;
  color: boolean;
  price: boolean;
}

export default function Shop() {
  const filterParams = useSearchParams();
  const sortParams = filterParams.get('sort');
  const genderParams = filterParams.get('gender');
  const inventoryParams = filterParams.get('inventory');
  const fitParams = filterParams.getAll('fit');

  const [filters, setFilters] = useState<Filters>({
    category: mockDefaultFilters.category,
    subCategory: mockDefaultFilters.subCategory,
    types: mockDefaultFilters.types,
    sort:
      sortOptions.find((s) => s.value === sortParams) ||
      mockDefaultFilters.sort,
    gender:
      genderOptions.find((g) => g.value === genderParams) ||
      mockDefaultFilters.gender,
    inventory:
      inventoryOptions.find((g) => g.value === inventoryParams) ||
      mockDefaultFilters.inventory,
    fit:
      fitOptions.filter((f) => fitParams.includes(f.value)) ||
      mockDefaultFilters.fit,
    color: mockDefaultFilters.color,
    minPrice: mockDefaultFilters.minPrice,
    maxPrice: mockDefaultFilters.maxPrice
  });

  const allFiltersClosed: OpenFilters = {
    sort: false,
    gender: false,
    type: false,
    fit: false,
    inventory: false,
    color: false,
    price: false
  };

  const [filterModalOpen, setFilterModalOpen] = useState<boolean>(false);
  const [filtersOpen, setFiltersOpen] = useState<OpenFilters>(allFiltersClosed);

  return (
    <main className='px-0'>
      <div className='z-[1] sticky top-16 mb-4 flex flex-col md:flex-row justify-between gap-2 md:gap-8 py-2 px-4 md:px-8 bg-background shadow w-full'>
        <div
          className='flex overflow-x-scroll items-center gap-8 text-nowrap pb-2 font-light'
          style={{ scrollbarWidth: 'none' }}
        >
          <button className='text-accent'>All</button>
          {categories.map((c) => (
            <button key={c.category.value}>{c.category.label}</button>
          ))}
        </div>
        <button
          className='btn-secondary border-primary text-base py-2 font-light'
          onClick={() => setFilterModalOpen(true)}
        >
          Filters
        </button>
      </div>

      <div className='products-grid'>
        {mockProducts.map((product) => (
          <ProductCard key={product.id} product={product} showBrand={true} />
        ))}
      </div>

      <Modal
        isOpen={filterModalOpen}
        onClose={() => {
          setFilterModalOpen(false);
          setFiltersOpen(allFiltersClosed);
        }}
        lockedWidth={false}
      >
        <Form
          action={''}
          className='w-full md:w-96 flex flex-col h-full'
          onSubmit={() => setFilterModalOpen(false)}
        >
          <h4 className='sticky top-0 bg-background'>Filters</h4>
          <AccordionRadio
            name='Sort'
            selected={filters.sort}
            options={sortOptions}
            isOpen={filtersOpen.sort}
            onOpen={() =>
              setFiltersOpen({ ...filtersOpen, sort: !filtersOpen.sort })
            }
            onClose={() => {
              setFiltersOpen({ ...filtersOpen, sort: false });
            }}
            onSelect={(s) => {
              setFilters({ ...filters, sort: s as SortOption });
            }}
          />
          <AccordionRadio
            name='Gender'
            selected={filters.gender}
            options={genderOptions}
            isOpen={filtersOpen.gender}
            onOpen={() =>
              setFiltersOpen({ ...filtersOpen, gender: !filtersOpen.gender })
            }
            onClose={() => {
              setFiltersOpen({ ...filtersOpen, gender: false });
            }}
            onSelect={(g) => {
              setFilters({ ...filters, gender: g as GenderOption });
            }}
          />
          <AccordionRadio
            name='Inventory'
            selected={filters.inventory}
            options={inventoryOptions}
            isOpen={filtersOpen.inventory}
            onOpen={() =>
              setFiltersOpen({
                ...filtersOpen,
                inventory: !filtersOpen.inventory
              })
            }
            onClose={() => {
              setFiltersOpen({ ...filtersOpen, inventory: false });
            }}
            onSelect={(i) => {
              setFilters({ ...filters, inventory: i as InventoryOption });
            }}
          />
          <AccordionCheckbox
            name='Fit'
            selected={filters.fit}
            options={fitOptions}
            isOpen={filtersOpen.fit}
            onOpen={() =>
              setFiltersOpen({ ...filtersOpen, fit: !filtersOpen.fit })
            }
            onChecked={(o) =>
              setFilters({
                ...filters,
                fit: [...(filters.fit || []), o as FitOption]
              })
            }
            onUnchecked={(o) =>
              setFilters({
                ...filters,
                fit: filters.fit?.filter((f) => f.value !== o.value) || []
              })
            }
          />
          <AccordionCheckbox
            name='Color'
            selected={filters.color}
            options={colorOptions}
            isOpen={filtersOpen.color}
            onOpen={() =>
              setFiltersOpen({ ...filtersOpen, color: !filtersOpen.color })
            }
            onChecked={(o) =>
              setFilters({
                ...filters,
                color: [...(filters.color || []), o as ColorOption]
              })
            }
            onUnchecked={(o) =>
              setFilters({
                ...filters,
                color: filters.color?.filter((c) => c.value !== o.value) || []
              })
            }
          />

          <div className='w-full border-t border-primary py-8'></div>

          <div className='w-full flex gap-4 sticky bottom-0 bg-background mt-auto'>
            <button
              type='button'
              className='btn-secondary flex-grow'
              onClick={() => setFilters(mockDefaultFilters)}
            >
              Clear All
            </button>
            <button type='submit' className='btn-accent flex-grow'>
              Apply
            </button>
          </div>
        </Form>
      </Modal>
    </main>
  );
}
