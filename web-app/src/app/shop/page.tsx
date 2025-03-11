'use client';
import SlideoverModal from '@/components/SlideoverModal';
import ProductCard from '@/components/ProductCard';
import {
  AvailabilityKeys,
  availabilityLabels,
  ColorKeys,
  colorLabels,
  colorOptions,
  Filters,
  mockDefaultFilters,
  SortKeys,
  sortLabels
} from '@/interfaces/filters';
import {
  FitKeys,
  fitLabels,
  GenderKeys,
  genderLabels
} from '@/interfaces/brandProducts';
import { mockProducts } from '@/interfaces/brandProducts';
import { useState } from 'react';
import Form from 'next/form';
import { useSearchParams } from 'next/navigation';
import AccordionRadio from '@/components/AccordionRadio';
import AccordionCheckbox from '@/components/AccordionCheckbox';
import {
  categories,
  CategoryKeys,
  categoryLabels
} from '@/interfaces/categories';

interface OpenFilters {
  sort: boolean;
  gender: boolean;
  type: boolean;
  fit: boolean;
  // inventory: boolean;
  availability: boolean;
  color: boolean;
  price: boolean;
}

export default function Shop() {
  const filterParams = useSearchParams();
  const sortParams = filterParams.get('sort');
  const genderParams = filterParams.get('gender');
  // const inventoryParams = filterParams.get('inventory');
  const availabilityParams = filterParams.get('availability');
  const fitParams = filterParams.getAll('fit');

  const [filters, setFilters] = useState<Filters>({
    category: mockDefaultFilters.category,
    subCategory: mockDefaultFilters.subCategory,
    types: mockDefaultFilters.types,
    sort: (sortParams as SortKeys) || mockDefaultFilters.sort,
    gender: (genderParams as GenderKeys) || mockDefaultFilters.gender,
    availability:
      (availabilityParams as AvailabilityKeys) ||
      mockDefaultFilters.availability,
    fit: (fitParams as FitKeys[]) || mockDefaultFilters.fit,
    color: mockDefaultFilters.color,
    minPrice: mockDefaultFilters.minPrice,
    maxPrice: mockDefaultFilters.maxPrice
  });

  const allFiltersClosed: OpenFilters = {
    sort: false,
    gender: false,
    type: false,
    fit: false,
    // inventory: false,
    availability: false,
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
          {Object.keys(categories).map((c) => (
            <button key={c}>{categoryLabels[c as CategoryKeys]}</button>
          ))}
        </div>
        <button
          className='btn-secondary border-primary text-base py-2 font-light'
          onClick={() => setFilterModalOpen(true)}
        >
          Filters
        </button>
      </div>

      <div className='products-grid pb-8'>
        {mockProducts.map((product) => (
          <ProductCard key={product.id} product={product} showBrand={true} />
        ))}
      </div>

      <SlideoverModal
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
            selected={{
              label: sortLabels[filters.sort],
              value: filters.sort
            }}
            options={Object.keys(sortLabels).map((s) => ({
              label: sortLabels[s as SortKeys],
              value: s
            }))}
            isOpen={filtersOpen.sort}
            onOpen={() =>
              setFiltersOpen({ ...filtersOpen, sort: !filtersOpen.sort })
            }
            onClose={() => {
              setFiltersOpen({ ...filtersOpen, sort: false });
            }}
            onSelect={(s) => {
              setFilters({ ...filters, sort: s.value as SortKeys });
            }}
          />
          <AccordionRadio
            name='Gender'
            selected={{
              label: genderLabels[filters.gender],
              value: filters.gender
            }}
            options={Object.keys(genderLabels).map((g) => ({
              label: genderLabels[g as GenderKeys],
              value: g
            }))}
            isOpen={filtersOpen.gender}
            onOpen={() =>
              setFiltersOpen({ ...filtersOpen, gender: !filtersOpen.gender })
            }
            onClose={() => {
              setFiltersOpen({ ...filtersOpen, gender: false });
            }}
            onSelect={(g) => {
              setFilters({ ...filters, gender: g.value as GenderKeys });
            }}
          />
          {/* <AccordionRadio
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
          /> */}
          <AccordionRadio
            name='Availability'
            selected={{
              label: availabilityLabels[filters.availability],
              value: filters.availability
            }}
            options={Object.keys(availabilityLabels).map((a) => ({
              label: availabilityLabels[a as AvailabilityKeys],
              value: a
            }))}
            isOpen={filtersOpen.availability}
            onOpen={() =>
              setFiltersOpen({
                ...filtersOpen,
                availability: !filtersOpen.availability
              })
            }
            onClose={() => {
              setFiltersOpen({ ...filtersOpen, availability: false });
            }}
            onSelect={(a) => {
              setFilters({
                ...filters,
                availability: a.value as AvailabilityKeys
              });
            }}
          />
          <AccordionCheckbox
            name='Fit'
            selected={filters.fit.map((f) => ({
              label: fitLabels[f],
              value: f
            }))}
            options={Object.keys(fitLabels).map((f) => ({
              label: fitLabels[f as FitKeys],
              value: f
            }))}
            isOpen={filtersOpen.fit}
            onOpen={() =>
              setFiltersOpen({ ...filtersOpen, fit: !filtersOpen.fit })
            }
            onChecked={(f) =>
              setFilters({
                ...filters,
                fit: [...(filters.fit || []), f.value as FitKeys]
              })
            }
            onUnchecked={(o) =>
              setFilters({
                ...filters,
                fit: filters.fit?.filter((f) => f !== o.value) || []
              })
            }
          />
          <AccordionCheckbox
            name='Color'
            selected={filters.color.map((c) => ({
              label: colorLabels[c],
              value: c
            }))}
            options={Object.keys(colorLabels).map((c) => ({
              label: colorLabels[c as ColorKeys],
              value: c,
              red: colorOptions.find((o) => o.color === c)?.red,
              green: colorOptions.find((o) => o.color === c)?.green,
              blue: colorOptions.find((o) => o.color === c)?.blue
            }))}
            isOpen={filtersOpen.color}
            onOpen={() =>
              setFiltersOpen({ ...filtersOpen, color: !filtersOpen.color })
            }
            onChecked={(c) =>
              setFilters({
                ...filters,
                color: [...(filters.color || []), c.value as ColorKeys]
              })
            }
            onUnchecked={(o) =>
              setFilters({
                ...filters,
                color: filters.color?.filter((c) => c !== o.value) || []
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
      </SlideoverModal>
    </main>
  );
}
