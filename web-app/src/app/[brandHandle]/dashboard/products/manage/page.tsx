'use client';
import { BrandProduct } from '@/interfaces/brandProducts';
import { Brand, emptyBrand, mockBrands } from '@/interfaces/brands';
import {
  categories,
  categoryLabels,
  subCategories,
  Subcategory,
  subcategoryLabels
} from '@/interfaces/categories';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { MultiSelect } from 'react-multi-select-component';

export default function ManageProductPage() {
  const brandHandle = usePathname().split('/')[1];
  const brand: Brand =
    mockBrands.find(
      (b) => b.handle.toLowerCase() === brandHandle.toLowerCase()
    ) || emptyBrand;
  const [subcategoryOptions, setSubcategoryOptions] = useState<Subcategory[]>(
    []
  );
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
    if (formData.categories.length < 1) {
      // if categories is empty clear subcategories
      setSubcategoryOptions([]);
      setFormData((prev) => ({ ...prev, subCategories: [] }));
    } else {
      // update subcategory options whenever category changes
      const updatedSubcategories = Object.keys(categories)
        .filter((c) =>
          formData.categories.includes(c as keyof typeof categoryLabels)
        )
        .map((c) => categories[c as keyof typeof categoryLabels])
        .flatMap((c) => c.subCategories);
      // console.log('Subcategories: ', updatedSubcategories);
      setSubcategoryOptions(updatedSubcategories);

      // filter out invalid subcatgory values (in case category gets unselected)
      const filteredSubcategories = formData.subCategories.filter((s) =>
        updatedSubcategories.some((uS) => uS.subcategory === s)
      );
      // console.log('Filtered Subcategories: ', filteredSubcategories);
      setFormData((prev) => ({
        ...prev,
        subCategories: filteredSubcategories
      }));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [formData.categories]);

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

            <div className='w-1/2 flex flex-col'>
              <p className='font-bold text-lg'>Subcategories</p>
              <MultiSelect
                className='text-secondary w-full max-w-full'
                options={subcategoryOptions.map((s) => ({
                  label: subcategoryLabels[s.subcategory],
                  value: s.subcategory
                }))}
                value={formData.subCategories.map((s) => ({
                  label: subcategoryLabels[s],
                  value: s
                }))}
                hasSelectAll={false}
                disableSearch={true}
                labelledBy='Select Subcategories'
                onChange={(selected: { label: string; value: string }[]) => {
                  const selectedValues = selected.map(
                    (item) => item.value as keyof typeof subcategoryLabels
                  );
                  setFormData((prev) => ({
                    ...prev,
                    subCategories: selectedValues
                  }));
                }}
                overrideStrings={{
                  allItemsAreSelected: formData.subCategories
                    .map((s) => subcategoryLabels[s])
                    .join(', '),
                  selectSomeItems: 'Select',
                  clearSearch: 'Clear',
                  noOptions: 'Select a Category First'
                }}
                disabled={subcategoryOptions.length < 1}
              />
            </div>
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
