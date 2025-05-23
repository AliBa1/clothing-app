'use client';
import ImageCarousel from '@/components/ImageCarousel';
import SlideoverModal from '@/components/SlideoverModal';
import {
  blankColorVariant,
  blankProduct,
  BrandProduct,
  ColorVariant,
  mockProducts
} from '@/interfaces/brandProducts';
import { categoryLabels, subcategoryLabels, typeLabels } from '@/interfaces/categories';
import { discountedPrice } from '@/utils/helperFunctions';
import {
  sortStringsAsc,
  sortStringsDes,
  sortNumbersAsc,
  sortNumbersDes,
  SortType
} from '@/utils/sortingProducts';
import { mdiChevronDown, mdiChevronUp } from '@mdi/js';
import Icon from '@mdi/react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

// To do:
// Confirm delete
// Share links
// Bottom buttons functionality
// Client/server components

export default function DashboardProductsPage() {
  const brandHandle = usePathname().split('/')[1];
  const brandProducts = mockProducts.filter(
    (p) => p.brand.handle === brandHandle
  );
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [selectedProduct, setSelectedProduct] =
    useState<BrandProduct>(blankProduct);
  const [selectedColor, setSelectedColor] =
    useState<ColorVariant>(blankColorVariant);
  const allImages = selectedColor.images.additional
    ? [selectedColor.images.cover].concat(selectedColor.images.additional)
    : [selectedColor.images.cover];

  const [sortName, setSortName] = useState<SortType>({
    sort: false,
    ascending: false
  });

  const [sortPrice, setSortPrice] = useState<SortType>({
    sort: false,
    ascending: false
  });

  const [sortColor, setSortColor] = useState<SortType>({
    sort: false,
    ascending: false
  });

  const [sortSales, setSortSales] = useState<SortType>({
    sort: false,
    ascending: false
  });

  const [sortRevenue, setSortRevenue] = useState<SortType>({
    sort: false,
    ascending: false
  });

  const sortedColorVariants = brandProducts
    .flatMap((product) =>
      product.colors.map((color) => ({ ...color, product: product }))
    )
    .sort((a, b) => {
      if (sortName.sort) {
        return sortName.ascending
          ? sortStringsAsc(a.product.name, b.product.name)
          : sortStringsDes(a.product.name, b.product.name);
      } else if (sortPrice.sort) {
        return sortPrice.ascending
          ? sortNumbersAsc(a.price, b.price)
          : sortNumbersDes(a.price, b.price);
      } else if (sortColor.sort) {
        return sortColor.ascending
          ? sortStringsAsc(a.colorName, b.colorName)
          : sortStringsDes(a.colorName, b.colorName);
      } else if (sortSales.sort) {
        return sortSales.ascending
          ? sortNumbersAsc(
              a.salesData?.totalSold || 0,
              b.salesData?.totalSold || 0
            )
          : sortNumbersDes(
              a.salesData?.totalSold || 0,
              b.salesData?.totalSold || 0
            );
      } else if (sortRevenue.sort) {
        return sortRevenue.ascending
          ? sortNumbersAsc(
              a.salesData?.totalRevenue || 0,
              b.salesData?.totalRevenue || 0
            )
          : sortNumbersDes(
              a.salesData?.totalRevenue || 0,
              b.salesData?.totalRevenue || 0
            );
      }
      return 0;
    });

  function resetSorts() {
    setSortName({
      sort: false,
      ascending: false
    });

    setSortPrice({
      sort: false,
      ascending: false
    });

    setSortColor({
      sort: false,
      ascending: false
    });

    setSortSales({
      sort: false,
      ascending: false
    });

    setSortRevenue({
      sort: false,
      ascending: false
    });
  }
  return (
    <div className='flex flex-col w-full gap-4'>
      <div className='flex w-full items-center justify-between'>
        <h4 className='text-xl md:text-2xl'>Products</h4>
        <div className='flex gap-4 text-base'>
          <Link href={`${usePathname()}/manage`} className='btn-primary min-h-8 md:px-4'>New Product</Link>
          {/* <button className='btn-secondary min-h-8 md:px-4'>
            New Colorway
          </button> */}
        </div>
      </div>
      <div className='rounded overflow-x-auto'>
        <table className='table table-auto w-full'>
          <thead className='bg-accent text-secondary text-lg md:text-xl'>
            <tr>
              <th className='px-4 py-2'>Image</th>
              <th className='px-4 py-2'>
                <button
                  className='flex justify-center w-full'
                  onClick={() => {
                    if (sortName.sort && sortName.ascending) {
                      resetSorts();
                      setSortName({ sort: true, ascending: false });
                    } else if (sortName.sort && !sortName.ascending) {
                      setSortName({ sort: false, ascending: true });
                    } else {
                      resetSorts();
                      setSortName({ sort: true, ascending: true });
                    }
                  }}
                >
                  {/* to keep header centered */}
                  <Icon
                    className='invisible'
                    path={sortName.ascending ? mdiChevronDown : mdiChevronUp}
                    size={1}
                  />
                  Name
                  <Icon
                    className={`${!sortName.sort && 'invisible'}`}
                    path={sortName.ascending ? mdiChevronDown : mdiChevronUp}
                    size={1}
                  />
                </button>
              </th>
              <th className='px-4 py-2'>
                <button
                  className='flex justify-center w-full'
                  onClick={() => {
                    if (sortColor.sort && sortColor.ascending) {
                      resetSorts();
                      setSortColor({ sort: true, ascending: false });
                    } else if (sortColor.sort && !sortColor.ascending) {
                      setSortColor({ sort: false, ascending: true });
                    } else {
                      resetSorts();
                      setSortColor({ sort: true, ascending: true });
                    }
                  }}
                >
                  {/* to keep header centered */}
                  <Icon
                    className='invisible'
                    path={sortColor.ascending ? mdiChevronDown : mdiChevronUp}
                    size={1}
                  />
                  Color
                  <Icon
                    className={`${!sortColor.sort && 'invisible'}`}
                    path={sortColor.ascending ? mdiChevronDown : mdiChevronUp}
                    size={1}
                  />
                </button>
              </th>
              <th className='px-4 py-2'>
                <button
                  className='flex justify-center w-full'
                  onClick={() => {
                    if (sortPrice.sort && sortPrice.ascending) {
                      resetSorts();
                      setSortPrice({ sort: true, ascending: false });
                    } else if (sortPrice.sort && !sortPrice.ascending) {
                      setSortPrice({ sort: false, ascending: true });
                    } else {
                      resetSorts();
                      setSortPrice({ sort: true, ascending: true });
                    }
                  }}
                >
                  {/* to keep header centered */}
                  <Icon
                    className='invisible'
                    path={sortPrice.ascending ? mdiChevronDown : mdiChevronUp}
                    size={1}
                  />
                  Price
                  <Icon
                    className={`${!sortPrice.sort && 'invisible'}`}
                    path={sortPrice.ascending ? mdiChevronDown : mdiChevronUp}
                    size={1}
                  />
                </button>
              </th>

              {/* <th className='px-4 py-2'>Category</th> */}
              {/* <th className='px-4 py-2'>Subcategory</th> */}
              {/* <th className='px-4 py-2'>Types</th> */}
              <th className='px-4 py-2'>Discount</th>
              {/* <th className='px-4 py-2'></th> */}
              <th className='px-4 py-2'>
                <button
                  className='flex justify-center w-full'
                  onClick={() => {
                    if (sortSales.sort && sortSales.ascending) {
                      resetSorts();
                      setSortSales({ sort: true, ascending: false });
                    } else if (sortSales.sort && !sortSales.ascending) {
                      setSortSales({ sort: false, ascending: true });
                    } else {
                      resetSorts();
                      setSortSales({ sort: true, ascending: true });
                    }
                  }}
                >
                  {/* to keep header centered */}
                  <Icon
                    className='invisible'
                    path={sortSales.ascending ? mdiChevronDown : mdiChevronUp}
                    size={1}
                  />
                  Sales
                  <Icon
                    className={`${!sortSales.sort && 'invisible'}`}
                    path={sortSales.ascending ? mdiChevronDown : mdiChevronUp}
                    size={1}
                  />
                </button>
              </th>
              <th className='px-4 py-2'>
                <button
                  className='flex justify-center w-full'
                  onClick={() => {
                    if (sortRevenue.sort && sortRevenue.ascending) {
                      resetSorts();
                      setSortRevenue({ sort: true, ascending: false });
                    } else if (sortRevenue.sort && !sortRevenue.ascending) {
                      setSortRevenue({ sort: false, ascending: true });
                    } else {
                      resetSorts();
                      setSortRevenue({ sort: true, ascending: true });
                    }
                  }}
                >
                  {/* to keep header centered */}
                  <Icon
                    className='invisible'
                    path={sortRevenue.ascending ? mdiChevronDown : mdiChevronUp}
                    size={1}
                  />
                  Revenue
                  <Icon
                    className={`${!sortRevenue.sort && 'invisible'}`}
                    path={sortRevenue.ascending ? mdiChevronDown : mdiChevronUp}
                    size={1}
                  />
                </button>
              </th>
            </tr>
          </thead>
          <tbody>
            {sortedColorVariants.map((cV) => (
              <tr
                key={cV.id}
                className='text-center md:hover:bg-secondary cursor-pointer text-lg md:text-xl'
                onClick={() => {
                  setIsModalOpen(true);
                  // setSelectedProduct(p);
                  setSelectedProduct(cV.product);
                  setSelectedColor(cV);
                }}
              >
                <td className='px-4 py-2'>
                  <Image
                    src={cV.images.cover}
                    // alt={`${p.name} Cover Image`}
                    alt={`${cV.product.name} Cover Image`}
                    height={1280 / 8}
                    width={1024 / 8}
                    className='aspect-[4/5] rounded object-cover object-center bg-background dark:bg-white mx-auto'
                    priority
                  />
                </td>
                {/* <td className='px-4 py-2'>{p.name}</td> */}
                <td className='px-4 py-2'>{cV.product.name}</td>
                <td className='px-4 py-2'>{cV.colorName}</td>
                <td className='px-4 py-2'>${cV.price}</td>
                {/* <td className='px-4 py-2'>
                  {p.categories.map((c) => c.label).join(', ')}
                </td> */}
                {/* <td className='px-4 py-2'>
                  {p.subCategories.map((sC) => sC.label).join(', ')}
                </td> */}
                {/* <td className='px-4 py-2'>{p.types.map((t) => t.label).join(', ')}</td> */}
                <td className='px-4 py-2'>
                  {cV.discount
                    ? cV.discount.type === 'percent'
                      ? `${cV.discount.amount}% Off`
                      : `$${cV.discount.amount} Off`
                    : 'None'}
                </td>
                {/* <td className='px-4 py-2'>
                    <button>
                      <Icon path={mdiDotsHorizontal} size={1} />
                    </button>
                  </td> */}
                <td className='px-4 py-2'>
                  {cV.salesData?.totalSold ? cV.salesData?.totalSold : '-'}
                </td>
                <td className='px-4 py-2'>
                  {cV.salesData?.totalRevenue
                    ? cV.salesData?.totalRevenue
                    : '-'}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <SlideoverModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        lockedWidth={true}
      >
        <div className='flex flex-col items-center h-full'>
          <ImageCarousel images={allImages} sizeDivisor={4} />
          <h4 className='text-center text-lg md:text-2xl py-4'>
            {selectedProduct.name}
          </h4>
          {selectedColor.discount ? (
            <h4 className='text-center text-lg md:text-2xl py-4'>
              ${discountedPrice(selectedColor.price, selectedColor.discount)}{' '}
              <span className='line-through text-accent'>
                ${selectedColor.price}
              </span>
            </h4>
          ) : (
            <h4 className='text-center text-lg md:text-2xl py-4'>
              ${selectedColor.price}
            </h4>
          )}
          <div className='border-b border-primary w-full py-4'>
            <div className='flex justify-between gap-8'>
              <p className=''>Color</p>
              <p className='font-bold text-end'>{selectedColor.colorName}</p>
            </div>
            <div className='flex justify-between gap-8'>
              <p className=''>Discount</p>
              <p className='font-bold text-end'>
                {selectedColor.discount
                  ? selectedColor.discount.type === 'percent'
                    ? `${selectedColor.discount.amount}% Off`
                    : `$${selectedColor.discount.amount} Off`
                  : 'None'}
              </p>
            </div>
          </div>
          <div className='border-b border-primary w-full py-4'>
            <div className='flex justify-between gap-8'>
              <p className=''>Categories</p>
              <p className='font-bold text-end'>
                {selectedProduct.categories.map((c) => categoryLabels[c]).join(', ')}
              </p>
            </div>
            <div className='flex justify-between gap-8'>
              <p className=''>Subcategories</p>
              <p className='font-bold text-end'>
                {selectedProduct.subCategories.map((s) => subcategoryLabels[s]).join(', ')}
              </p>
            </div>
            <div className='flex justify-between gap-8'>
              <p className=''>Types</p>
              <p className='font-bold text-end'>
                {selectedProduct.types.map((t) => typeLabels[t]).join(', ')}
              </p>
            </div>
          </div>
          <div className='border-b border-primary w-full py-2'>
            <div className='flex justify-between gap-8'>
              <p className=''>Sizes</p>
              <p className='font-bold text-end'>
                {selectedColor.sizes.map((s) => s.size).join(', ')}
              </p>
            </div>
            <div className='flex justify-between gap-8'>
              <p className=''>Quantity (by size)</p>
              <p className='font-bold text-end'>
                {selectedColor.sizes.map((s) => s.quantity).join(', ')}
              </p>
            </div>
          </div>

          <div className='border-b border-primary w-full py-2'>
            <div className='flex justify-between gap-8'>
              <p className=''>Descripton</p>
              <p className='font-bold text-end whitespace-pre-line'>
                {selectedProduct.description}
              </p>
            </div>
            <div className='flex justify-between gap-8'>
              <p className=''>Shipping</p>
              <p className='font-bold text-end'>{selectedProduct.shipping}</p>
            </div>
            <div className='flex justify-between gap-8'>
              <p className=''>Returns</p>
              <p className='font-bold text-end'>{selectedProduct.returns}</p>
            </div>
            <div className='flex justify-between gap-8'>
              <p className=''>Size Notes</p>
              <p className='font-bold text-end'>{selectedProduct.sizeNotes}</p>
            </div>
          </div>

          <div className='border-b border-primary w-full py-2'>
            <div className='flex justify-between gap-8'>
              <p className=''>Total Sold</p>
              <p className='font-bold text-end'>
                {selectedProduct.salesData?.totalSold
                  ? selectedProduct.salesData?.totalSold
                  : '-'}
              </p>
            </div>
            <div className='flex justify-between gap-8'>
              <p className=''>Total Revenue</p>
              <p className='font-bold text-end'>
                {selectedProduct.salesData?.totalRevenue
                  ? selectedProduct.salesData?.totalRevenue
                  : '-'}
              </p>
            </div>
          </div>

          <div className='w-full py-2 pb-24'>
            <div className='flex justify-between gap-8'>
              <p className=''>Views</p>
              <p className='font-bold text-end'>
                {selectedProduct.engagementData?.views
                  ? selectedProduct.engagementData?.views
                  : '-'}
              </p>
            </div>
            <div className='flex justify-between gap-8'>
              <p className=''>Saved</p>
              <p className='font-bold text-end'>
                {selectedProduct.engagementData?.saved
                  ? selectedProduct.engagementData?.saved
                  : '-'}
              </p>
            </div>
            <div className='flex justify-between gap-8'>
              <p className=''>Shared</p>
              <p className='font-bold text-end'>
                {selectedProduct.engagementData?.shared
                  ? selectedProduct.engagementData?.shared
                  : '-'}
              </p>
            </div>
          </div>

          <div className='flex gap-4 fixed bottom-0 py-4 bg-background w-full justify-center'>
            <button className='btn-accent bg-info text-sm md:text-base min-h-8 px-2 md:px-4'>
              Analytics
            </button>
            <button className='btn-primary text-sm md:text-base min-h-8 px-2 md:px-4'>
              Share
            </button>
            <button className='btn-secondary text-sm md:text-base min-h-8 px-2 md:px-4'>
              Edit
            </button>
            <button className='btn-primary bg-error text-sm md:text-base min-h-8 px-2 md:px-4'>
              Delete
            </button>
          </div>
        </div>
      </SlideoverModal>
    </div>
  );
}
