'use client';
import { BrandProduct } from '@/interfaces/brandProducts';
import { Brand, emptyBrand, mockBrands } from '@/interfaces/brands';
import {
  categories,
  CategoryKeys,
  categoryLabels,
  Subcategory,
  SubcategoryKeys,
  subcategoryLabels,
  TypeKeys,
  typeLabels
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
  const [typeOptions, setTypeOptions] = useState<TypeKeys[]>([]);
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
      const updatedSubcategories: Subcategory[] = Object.keys(categories)
        .filter((c) => formData.categories.includes(c as CategoryKeys))
        .map((c) => categories[c as CategoryKeys])
        .flatMap((c) => c.subCategories);
      // console.log('Subcategories: ', updatedSubcategories);
      setSubcategoryOptions(updatedSubcategories);

      // filter out invalid subcatgory values (in case category gets unselected)
      const filteredSubcategories: SubcategoryKeys[] =
        formData.subCategories.filter((s) =>
          updatedSubcategories.some((uS) => uS.subcategory === s)
        );

      if (filteredSubcategories !== formData.subCategories) {
        // console.log('Filtered Subcategories: ', filteredSubcategories);
        setFormData((prev) => ({
          ...prev,
          subCategories: filteredSubcategories
        }));
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [formData.categories]);

  useEffect(() => {
    if (formData.subCategories.length < 1) {
      // if categories is empty clear subcategories
      setTypeOptions([]);
      setFormData((prev) => ({ ...prev, types: [] }));
    } else {
      // update type options whenever category changes
      const updatedTypeOptions: TypeKeys[] = subcategoryOptions
        .filter((s) =>
          formData.subCategories.includes(s.subcategory as SubcategoryKeys)
        )
        .map((s) => s.types)
        .flat();
      console.log('Types: ', updatedTypeOptions);
      setTypeOptions(updatedTypeOptions);

      // filter out invalid type values (in case category gets unselected)
      const filteredTypes: TypeKeys[] = formData.types.filter((t) =>
        updatedTypeOptions.includes(t)
      );

      if (filteredTypes !== formData.types) {
        // console.log('Filtered Types: ', filteredTypes);
        setFormData((prev) => ({
          ...prev,
          types: filteredTypes
        }));
      }
    }
  }, [formData.subCategories, subcategoryOptions]);

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
                className='text-black w-full max-w-full text-wrap'
                options={Object.keys(categories).map((c) => ({
                  label: categoryLabels[c as CategoryKeys],
                  value: c as string
                }))}
                value={formData.categories.map((c) => ({
                  label: categoryLabels[c as CategoryKeys],
                  value: c as string
                }))}
                hasSelectAll={false}
                disableSearch={true}
                labelledBy='Select Categories'
                onChange={(selected: { label: string; value: string }[]) => {
                  const selectedValues = selected.map(
                    (item) => item.value as CategoryKeys
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
                className='text-black w-full max-w-full text-wrap'
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
                    (item) => item.value as SubcategoryKeys
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

          <div className='w-full'>
            <p className='font-bold text-lg'>Types</p>
            <MultiSelect
              className='text-black w-full max-w-full'
              options={typeOptions.map((t) => ({
                label: typeLabels[t],
                value: t
              }))}
              value={formData.types.map((t) => ({
                label: typeLabels[t],
                value: t
              }))}
              hasSelectAll={false}
              disableSearch={true}
              labelledBy='Select Types'
              onChange={(selected: { label: string; value: string }[]) => {
                const selectedValues = selected.map(
                  (item) => item.value as TypeKeys
                );
                setFormData((prev) => ({
                  ...prev,
                  types: selectedValues
                }));
              }}
              overrideStrings={{
                allItemsAreSelected: formData.types
                  .map((t) => typeLabels[t])
                  .join(', '),
                selectSomeItems: 'Select',
                clearSearch: 'Clear',
                noOptions: 'Select a Subcategory First'
              }}
              disabled={typeOptions.length < 1}
            />
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
