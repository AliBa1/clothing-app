'use client';
import { BrandProduct } from '@/interfaces/brandProducts';
import { Brand, emptyBrand, mockBrands } from '@/interfaces/brands';
import { categories, categoryLabels } from '@/interfaces/categories';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { MultiSelect } from 'react-multi-select-component';

export default function ManageProductPage() {
  const brandHandle = usePathname().split('/')[1];
  const brand: Brand =
    mockBrands.find(
      (b) => b.handle.toLowerCase() === brandHandle.toLowerCase()
    ) || emptyBrand;

  const [formData, setFormData] = useState<BrandProduct>({
    id: '',
    name: '',
    productSlug: '',
    brand: brand,
    categories: [],
    subCategories: [],
    types: [],
    description: '',
    shipping: '',
    returns: '',
    colorNotes: '',
    sizeNotes: '',
    colors: []
  });

  function handleInput(e: React.ChangeEvent<HTMLInputElement>) {
    const fieldName = e.target.name;
    const fieldValue = e.target.value;

    setFormData((prevState) => ({
      ...prevState,
      [fieldName]: fieldValue
    }));
  }

  useEffect(() => {
    const mappedCategories = Object.keys(categories).map((c) => ({
      label: c,
      value: categoryLabels[c as keyof typeof categoryLabels]
    }));
    console.log('Categories: ', categories);
    console.log('Mapped Categories: ', mappedCategories);
  }, []);

  return (
    <form className='flex flex-col w-full gap-4'>
      <h4 className='text-xl md:text-2xl'>Manage Product</h4>

      <div className='flex w-full gap-4'>
        <div className='w-1/2 flex flex-col gap-8'>
          <label className='font-bold flex flex-col text-lg'>
            Product Name
            <input
              className='rounded-lg p-2 text-black'
              type='text'
              name='name'
              value={formData.name}
              onChange={handleInput}
            />
          </label>

          <div className='flex gap-4'>
            <div className='w-1/2 flex flex-col'>
              <p className='font-bold text-lg'>Categories</p>
              <MultiSelect
                options={Object.keys(categories).map((c) => ({
                  label: categoryLabels[c as keyof typeof categoryLabels],
                  value: c as string
                }))}
                value={formData.categories.map((c) => ({
                  label: categoryLabels[c as keyof typeof categoryLabels],
                  value: c as string
                }))}
                hasSelectAll={false}
                disableSearch={true}
                labelledBy='Select Categories'
                className='text-secondary w-full max-w-full'
                onChange={(selected: { label: string; value: string }[]) => {
                  const selectedValues = selected.map(
                    (item) => item.value as keyof typeof categoryLabels
                  );
                  setFormData((prev) => ({
                    ...prev,
                    categories: selectedValues
                  }));
                }}
                overrideStrings={{
                  allItemsAreSelected: formData.categories
                    .map((c) => categoryLabels[c])
                    .join(', '),
                  selectSomeItems: 'Select',
                  clearSearch: 'Clear',
                  noOptions: 'No categories available'
                }}
              />
            </div>

            <label className='w-1/2 font-bold flex flex-col text-lg'>
              Subcategories
              <input
                className='rounded-lg p-2 text-black'
                type='select'
                name='subCategories'
                value={formData.subCategories}
                onChange={handleInput}
              />
            </label>
          </div>
        </div>
        <div className='w-1/2'>
          <label className='font-bold flex flex-col text-lg'>
            Product Name
            <input
              className='rounded p-2 text-black'
              type='text'
              name='name'
              value={formData.name}
              onChange={handleInput}
            />
          </label>
        </div>
      </div>
    </form>
  );
}
