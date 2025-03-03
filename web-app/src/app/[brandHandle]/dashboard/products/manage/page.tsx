'use client';
import { BrandProduct } from '@/interfaces/brandProducts';
import { Brand, emptyBrand, mockBrands } from '@/interfaces/brands';
import { categories, categoryLabels } from '@/interfaces/categories';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

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
              <fieldset>
                {Object.keys(categories).map((c) => (
                  <div key={c} className='flex items-center'>
                    <input
                      type='checkbox'
                      className='appearance-none h-4 mr-2 w-4 border border-primary rounded checked:bg-accent checked:border-primary'
                      id={`${c}-checkbox`}
                      name={'categories'}
                      value={c}
                      checked={formData.categories.includes(
                        c as keyof typeof categoryLabels
                      )}
                      onChange={(e) => {
                        if (e.target.checked) {
                          setFormData((prevState) => ({
                            ...prevState,
                            categories: [
                              ...formData.categories,
                              e.target.value as keyof typeof categoryLabels
                            ]
                          }));
                        } else {
                          setFormData((prevState) => ({
                            ...prevState,
                            categories: formData.categories.filter(
                              (c) =>
                                c !==
                                (e.target.value as keyof typeof categoryLabels)
                            )
                          }));
                        }
                      }}
                    />
                    <label
                      htmlFor={`${c}-checkbox`}
                      className='cursor-pointer hover:text-accent flex items-center gap-2'
                    >
                      {categoryLabels[c as keyof typeof categoryLabels]}
                    </label>
                  </div>
                ))}
              </fieldset>
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
