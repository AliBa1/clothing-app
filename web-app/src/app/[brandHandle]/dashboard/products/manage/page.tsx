'use client';
import {
  BrandProduct,
  FitKeys,
  fitLabels,
  GenderKeys,
  genderLabels
} from '@/interfaces/brandProducts';
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
import { usePathname, useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import MultiSelect from '@/components/MultiSelect';
import Icon from '@mdi/react';
import { mdiChevronLeft } from '@mdi/js';

// TODO:
// add min/max to all
// protect from SQL injections and XSS
// validate
// change p to label if possible
// add color varient section
// description section new lines
// client/server components

export default function ManageProductPage() {
  const router = useRouter();
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
      // console.log('Types: ', updatedTypeOptions);
      setTypeOptions(updatedTypeOptions);

      // filter out invalid type values (in case subcategory gets unselected)
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [formData.subCategories, subcategoryOptions]);

  return (
    <form className='flex flex-col w-full gap-4'>
      <button
        type='button'
        className='btn-primary w-40 items-center flex'
        onClick={() => {
          router.back();
        }}
      >
        <Icon path={mdiChevronLeft} size={1} />
        Back
      </button>
      <h4 className='text-xl md:text-2xl'>Manage Product</h4>

      <div className='flex w-full gap-4'>
        <div className='w-1/2 flex flex-col gap-8'>
          <label className='font-bold flex flex-col text-lg'>
            Product Name
            <input
              className='rounded-lg p-2 text-black font-normal'
              type='text'
              name='name'
              value={formData.name}
              onChange={handleInput}
            />
          </label>

          <div className='flex w-full gap-4 text-black'>
            <div className='w-1/2 flex flex-col'>
              <label htmlFor='gender-select' className='font-bold text-lg'>
                Gender
              </label>
              <select
                className='flex justify-between w-full p-2 bg-white disabled:opacity-25 rounded'
                name='gender'
                id='gender-select'
              >
                {Object.keys(genderLabels).map((g) => (
                  <option key={g} value={g}>
                    {genderLabels[g as GenderKeys]}
                  </option>
                ))}
              </select>
            </div>

            <div className='w-1/2 flex flex-col'>
              <label htmlFor='fit-select' className='font-bold text-lg'>
                Fit
              </label>
              <select
                className='flex justify-between w-full p-2 bg-white disabled:opacity-25 rounded'
                name='fit'
                id='fit-select'
              >
                {Object.keys(fitLabels).map((f) => (
                  <option key={f} value={f}>
                    {fitLabels[f as FitKeys]}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className='flex w-full gap-4'>
            <div className='w-1/2 flex flex-col'>
              <p className='font-bold text-lg'>Categories</p>
              <MultiSelect
                options={Object.keys(categories).map((c) => ({
                  label: categoryLabels[c as CategoryKeys],
                  value: c as string
                }))}
                selected={formData.categories.map((c) => ({
                  label: categoryLabels[c as CategoryKeys],
                  value: c as string
                }))}
                onChange={(e) => {
                  if (e.target.checked) {
                    setFormData((prev) => ({
                      ...prev,
                      categories: prev.categories.concat(
                        e.target.value as CategoryKeys
                      )
                    }));
                  } else {
                    setFormData((prev) => ({
                      ...prev,
                      categories: prev.categories.filter(
                        (pC) => pC !== e.target.value
                      )
                    }));
                  }
                }}
              />
            </div>

            <div className='w-1/2 flex flex-col'>
              <p className='font-bold text-lg'>Subcategories</p>
              <MultiSelect
                options={subcategoryOptions.map((s) => ({
                  label: subcategoryLabels[s.subcategory],
                  value: s.subcategory
                }))}
                selected={formData.subCategories.map((s) => ({
                  label: subcategoryLabels[s],
                  value: s
                }))}
                onChange={(e) => {
                  if (e.target.checked) {
                    setFormData((prev) => ({
                      ...prev,
                      subCategories: prev.subCategories.concat(
                        e.target.value as SubcategoryKeys
                      )
                    }));
                  } else {
                    setFormData((prev) => ({
                      ...prev,
                      subCategories: prev.subCategories.filter(
                        (pS) => pS !== e.target.value
                      )
                    }));
                  }
                }}
                disabled={subcategoryOptions.length < 1}
                disabledPlaceholder='Select a Category'
              />
            </div>
          </div>

          <div className='w-full'>
            <p className='font-bold text-lg'>Types</p>
            <MultiSelect
              options={typeOptions.map((t) => ({
                label: typeLabels[t],
                value: t
              }))}
              selected={formData.types.map((t) => ({
                label: typeLabels[t],
                value: t
              }))}
              onChange={(e) => {
                if (e.target.checked) {
                  setFormData((prev) => ({
                    ...prev,
                    types: prev.types.concat(e.target.value as TypeKeys)
                  }));
                } else {
                  setFormData((prev) => ({
                    ...prev,
                    types: prev.types.filter((pT) => pT !== e.target.value)
                  }));
                }
              }}
              disabled={typeOptions.length < 1}
              disabledPlaceholder='Select a Subcategory'
            />
          </div>

          <div className='w-full'>
            <p className='font-bold text-lg'>Description</p>
            {/* Add maxLength vvvvvvv */}
            <textarea
              className='w-full rounded p-2 resize-none'
              rows={8}
            ></textarea>
          </div>

          <div className='w-full'>
            <p className='font-bold text-lg'>Shipping Notes</p>
            {/* Add maxLength vvvvvvv */}
            <textarea
              className='w-full rounded p-2 resize-none'
              rows={4}
            ></textarea>
          </div>

          <div className='w-full'>
            <p className='font-bold text-lg'>Return Policy</p>
            {/* Add maxLength vvvvvvv */}
            <textarea
              className='w-full rounded p-2 resize-none'
              rows={4}
            ></textarea>
          </div>
        </div>

        {/* Other half */}
        <div className='w-1/2'>
          <p>
            Maybe add a table/chart here that shows all color varients and some
            options
          </p>
          <br></br>
          <label className='font-bold flex flex-col text-lg'>
            Color: Select a Color Varient to Edit
            <select className='rounded p-2 text-black' name='color'>
              <option value='any'>Any</option>
            </select>
          </label>

          <div className='flex w-full gap-4'>
            <label className='w-1/3 font-bold flex flex-col text-lg'>
              Price
              <div className='flex items-center border rounded-md'>
                <input
                  type='text'
                  value='$'
                  readOnly={true}
                  className='w-8 h-full text-center bg-gray-100 border-r rounded-l-md'
                />
                <input
                  className='w-full p-2 rounded-r-md'
                  type='text'
                  name='price'
                ></input>
              </div>
            </label>

            <label className='w-2/3 font-bold flex flex-col text-lg'>
              Discount
              <div className='flex items-center gap-2 border rounded-md'>
                <div className='flex w-full h-full'>
                  <input
                    type='text'
                    value='-'
                    readOnly={true}
                    className='w-8 h-full text-center bg-gray-100 border-r rounded-l-md'
                  />
                  <input
                    className='w-full p-2 rounded-r-md'
                    type='text'
                    name='price'
                    placeholder='Amount'
                    min={5}
                    // change based on % or $
                    max={100}
                  />
                </div>
                <select className='p-2 text-black' name='color'>
                  <option disabled>Type</option>
                  <option value='% Off'>%</option>
                  <option value='$ Off'>$</option>
                </select>
              </div>
            </label>
          </div>
        </div>
      </div>
    </form>
  );
}
