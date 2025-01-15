'use client';
import Modal from '@/components/Modal';
import ProductCard from '@/components/ProductCard';
import {
  Filters,
  FitOption,
  fitOptions,
  GenderOption,
  genderOptions,
  InventoryOption,
  inventoryOptions,
  LabelValue,
  SortOption,
  sortOptions
} from '@/interfaces/filters';
import { mockProducts } from '@/interfaces/products';
import { mdiChevronDown, mdiChevronUp } from '@mdi/js';
import Icon from '@mdi/react';
import { useRef, useState } from 'react';
import Form from 'next/form';
import { useSearchParams } from 'next/navigation';
import DropdownRadio from '@/components/DropdownRadio';

interface OpenFilters {
  sort: boolean;
  gender: boolean;
  type: boolean;
  fit: boolean;
  inventory: boolean;
  price: boolean;
}

export default function Shop() {
  const scrollDivRef = useRef<HTMLDivElement | null>(null);
  // const [showScrollLeft, setShowScrollLeft] = useState<boolean>(false);
  // const [showScrollRight, setShowScrollRight] = useState<boolean>(false);
  const [filterModalOpen, setFilterModalOpen] = useState<boolean>(false);

  const filterParams = useSearchParams();
  const [filters, setFilters] = useState<Filters>({
    category: undefined,
    subCategory: undefined,
    types: [],
    // sort:
    //   sortOptions.find((s) => s.value === filterParams.get('sort')) ||
    //   sortOptions[0],
    sort:
      sortOptions.find((s) => s.value === filterParams.get('sort')) ||
      sortOptions[0],
    gender:
      genderOptions.find((g) => g.value === filterParams.get('gender')) ||
      genderOptions[0],
    inventory:
      inventoryOptions.find((g) => g.value === filterParams.get('inventory')) ||
      inventoryOptions[0],
    fit: [],
    minPrice: undefined,
    maxPrice: undefined
  });

  // windows in filters modal
  const [filtersOpen, setFiltersOpen] = useState<OpenFilters>({
    sort: false,
    gender: false,
    type: false,
    fit: false,
    inventory: false,
    price: false
  });

  // const updateScrollButtons = () => {
  //   if (scrollDivRef.current) {
  //     const { scrollLeft, scrollWidth, clientWidth } = scrollDivRef.current;
  //     setShowScrollLeft(scrollLeft > 0);
  //     setShowScrollRight(scrollLeft + clientWidth < scrollWidth - 10);
  //   }
  // };

  // const scrollLeft = () => {
  //   if (scrollDivRef.current) {
  //     scrollDivRef.current.scrollTo({
  //       left: -200,
  //       behavior: 'smooth'
  //     });
  //   }
  // };

  // const scrollRight = () => {
  //   if (scrollDivRef.current) {
  //     scrollDivRef.current.scrollTo({
  //       left: scrollDivRef.current.scrollWidth,
  //       behavior: 'smooth'
  //     });
  //   }
  // };

  function onCheckboxChange(option: FitOption, checked: boolean) {
    if (checked) {
      setFilters({ ...filters, fit: [...(filters.fit || []), option] });
    } else {
      setFilters({
        ...filters,
        fit: filters.fit?.filter((f) => f.value !== option.value) || []
      });
    }
  }

  return (
    <main>
      {/* <div className='sticky top-16 mb-4 flex w-full justify-center gap-4 py-4 bg-background shadow'> */}
      {/* make into it's own component? vvvvvvvvvvv */}
      <div className='sticky top-16 mb-4 flex flex-col md:flex-row justify-between gap-2 md:gap-8 p-2 bg-background shadow w-full'>
        {/* {showScrollLeft && (
          <button onClick={scrollLeft} className='mt-2 border'>
            Scroll Left
          </button>
        )} */}
        <div
          ref={scrollDivRef}
          className='flex overflow-x-scroll items-center gap-8 text-nowrap pb-2 font-light'
          style={{ scrollbarWidth: 'none' }}
          // onScroll={updateScrollButtons}
        >
          <button className='text-accent'>All</button>
          <button>Hats</button>
          <button>Beanies</button>
          <button>T-Shirts</button>
          <button>Hoodies/Jackets</button>
          <button>Pants</button>
          <button>Jeans</button>
          <button>Accessories</button>
        </div>
        {/* {showScrollRight && (
          <button onClick={scrollRight} className='mt-2'>
            Scroll Right
          </button>
        )} */}
        <button
          className='secondary-btn border-primary text-base py-2 font-light'
          onClick={() => setFilterModalOpen(true)}
        >
          Filters
        </button>
      </div>
      <div className='grid grid-cols-3 lg:grid-cols-4 gap-4 px-2'>
        {mockProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      <Modal
        isOpen={filterModalOpen}
        onClose={() => {
          setFilterModalOpen(false);
          setFiltersOpen({
            sort: false,
            type: false,
            gender: false,
            fit: false,
            inventory: false,
            price: false
          });
        }}
      >
        {/* <div className='w-full md:w-96 flex flex-col'> */}
        <Form
          action={''}
          className='w-full md:w-96 flex flex-col h-full'
          onSubmit={() => setFilterModalOpen(false)}
        >
          <h4>Filters</h4>
          <DropdownRadio
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
          <DropdownRadio
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
          <DropdownRadio
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

          <button
            type='button'
            className='w-full flex justify-between p-4 border-t'
            onClick={() =>
              setFiltersOpen({ ...filtersOpen, fit: !filtersOpen.fit })
            }
          >
            Fit{' '}
            <Icon
              path={filtersOpen.fit ? mdiChevronUp : mdiChevronDown}
              size={1}
            />
          </button>
          <div
            className={`${
              filtersOpen.fit ? 'max-h-96 px-4 pb-8 md:pb-4 gap-4' : 'max-h-0'
            } overflow-hidden transition-all duration-300 flex-col`}
          >
            <fieldset>
              {fitOptions.map((f) => (
                <div key={f.value} className='flex items-center'>
                  <input
                    type='checkbox'
                    className='appearance-none h-4 mr-2 w-4 border border-secondary rounded checked:bg-accent checked:border-secondary focus:outline-none focus:ring-2 focus:ring-blue-300'
                    id={`fit-${f.value}`}
                    name='fit'
                    value={f.value}
                    checked={filters.fit && filters.fit.includes(f)}
                    onChange={(e) => onCheckboxChange(f, e.target.checked)}
                  />
                  <label
                    htmlFor={`fit-${f.value}`}
                    className='cursor-pointer hover:text-accent'
                  >
                    {f.label}
                  </label>
                </div>
              ))}
            </fieldset>
          </div>

          <div className='w-full border-t'></div>

          <div className='w-full flex gap-4 sticky bottom-0 bg-white mt-auto'>
            <button
              type='button'
              className='secondary-btn flex-grow'
              onClick={() =>
                setFilters({
                  category: undefined,
                  subCategory: undefined,
                  types: [],
                  sort: sortOptions[0],
                  gender: genderOptions[0],
                  inventory: inventoryOptions[0],
                  fit: [],
                  minPrice: undefined,
                  maxPrice: undefined
                })
              }
            >
              Clear All
            </button>
            <button type='submit' className='accent-btn flex-grow'>
              Apply
            </button>
          </div>
        </Form>
        {/* </div> */}
      </Modal>
    </main>
  );
}
