'use client';
import ImageCarousel from '@/components/ImageCarousel';
import Modal from '@/components/Modal';
import {
  blankColorVariant,
  blankProduct,
  BrandProduct,
  ColorVariant,
  mockProducts
} from '@/interfaces/brandProducts';
import { discountedPrice } from '@/utils/helperFunctions';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

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
  return (
    <div className='flex flex-col w-full'>
      <div className='flex w-full items-center justify-between'>
        <h4>Products</h4>
        <div className='flex gap-4'>
          <button className='btn-primary text-base min-h-8 md:px-4'>
            New Product
          </button>
          <button className='btn-secondary text-base min-h-8 md:px-4'>
            New Colorway
          </button>
        </div>
      </div>
      <div className='rounded overflow-x-scroll'>
        <table className='table table-auto w-full'>
          <thead className='bg-slate-600'>
            <tr>
              {/* <th className='px-4 py-2'>ID</th> */}
              <th className='px-4 py-2'>Image</th>
              <th className='px-4 py-2'>Name</th>
              <th className='px-4 py-2'>Price</th>
              <th className='px-4 py-2'>Color</th>
              {/* <th className='px-4 py-2'>Category</th> */}
              {/* <th className='px-4 py-2'>Subcategory</th> */}
              {/* <th className='px-4 py-2'>Types</th> */}
              <th className='px-4 py-2'>Discount</th>
              {/* <th className='px-4 py-2'></th> */}
            </tr>
          </thead>
          <tbody>
            {brandProducts.map((p) =>
              p.colors.map((cV) => (
                <tr
                  key={cV.id}
                  className='text-center border-b border-x hover:bg-secondary cursor-pointer'
                  onClick={() => {
                    setIsModalOpen(true);
                    setSelectedProduct(p);
                    setSelectedColor(cV);
                  }}
                >
                  {/* <td className='px-4 py-2'>{cV.id}</td> */}
                  <td className='px-4 py-2'>
                    <Image
                      src={cV.images.cover}
                      alt={`${p.name} Cover Image`}
                      height={1280 / 8}
                      width={1024 / 8}
                      className='aspect-[4/5] rounded object-cover object-center bg-background dark:bg-white mx-auto'
                      loading='lazy'
                    />
                  </td>
                  <td className='px-4 py-2'>{p.name}</td>
                  <td className='px-4 py-2'>${cV.price}</td>
                  <td className='px-4 py-2'>{cV.colorName}</td>
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
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        lockedWidth={false}
      >
        <div className='flex flex-col items-center'>
          <ImageCarousel images={allImages} sizeDivisor={4} />
          {/* <Image
            src={selectedColor.images.cover}
            alt={`${selectedProduct?.name} Cover Image`}
            height={1280 / 8}
            width={1024 / 8}
            className='aspect-[4/5] rounded object-cover object-center bg-background dark:bg-white mx-auto'
            loading='lazy'
          /> */}
          <h4>{selectedProduct.name}</h4>
          {selectedColor.discount ? (
            <h6>
              ${discountedPrice(selectedColor.price, selectedColor.discount)}{' '}
              <span className='line-through text-accent'>
                ${selectedColor.price}
              </span>
            </h6>
          ) : (
            <h6>${selectedColor.price}</h6>
          )}
          <div className='border-b w-full py-4'>
            <div className='flex justify-between'>
              <p className=''>Color</p>
              <p className='font-bold'>{selectedColor.colorName}</p>
            </div>
            <div className='flex justify-between'>
              <p className=''>Discount</p>
              <p className='font-bold'>
                {selectedColor.discount
                  ? selectedColor.discount.type === 'percent'
                    ? `${selectedColor.discount.amount}% Off`
                    : `$${selectedColor.discount.amount} Off`
                  : 'None'}
              </p>
            </div>
          </div>
          <div className='border-b w-full py-4'>
            <div className='flex justify-between'>
              <p className=''>Categories</p>
              <p className='font-bold'>
                {selectedProduct.categories.map((c) => c.label).join(', ')}
              </p>
            </div>
            <div className='flex justify-between'>
              <p className=''>Subcategories</p>
              <p className='font-bold'>
                {selectedProduct.subCategories.map((s) => s.label).join(', ')}
              </p>
            </div>
            <div className='flex justify-between'>
              <p className=''>Types</p>
              <p className='font-bold'>
                {selectedProduct.types.map((t) => t.label).join(', ')}
              </p>
            </div>
          </div>
          <div className='border-b w-full py-2'>
            <div className='flex justify-between'>
              <p className=''>Sizes</p>
              <p className='font-bold'>
                {selectedColor.sizes.map((s) => s.size).join(', ')}
              </p>
            </div>
            <div className='flex justify-between'>
              <p className=''>Quantity (by size)</p>
              <p className='font-bold'>
                {selectedColor.sizes.map((s) => s.quantity).join(', ')}
              </p>
            </div>
          </div>

          <div className='w-full py-2'>
            <div className='flex justify-between'>
              <p className=''>Descripton</p>
              <p className='font-bold'>{selectedProduct.description}</p>
            </div>
            <div className='flex justify-between'>
              <p className=''>Shipping</p>
              <p className='font-bold'>{selectedProduct.shipping}</p>
            </div>
            <div className='flex justify-between'>
              <p className=''>Returns</p>
              <p className='font-bold'>{selectedProduct.returns}</p>
            </div>
            <div className='flex justify-between'>
              <p className=''>Color Notes</p>
              <p className='font-bold'>{selectedProduct.colorNotes}</p>
            </div>
            <div className='flex justify-between'>
              <p className=''>Size Notes</p>
              <p className='font-bold'>{selectedProduct.sizeNotes}</p>
            </div>
          </div>

          <div className='flex gap-4 sticky bottom-0 py-4 bg-background w-full justify-center'>
            <button className='btn-accent bg-info text-base min-h-8 md:px-4'>
              Analytics
            </button>
            <button className='btn-primary text-base min-h-8 md:px-4'>
              Share
            </button>
            <button className='btn-secondary text-base min-h-8 md:px-4'>
              Edit
            </button>
            <button className='btn-primary bg-error text-base min-h-8 md:px-4'>
              Delete
            </button>
          </div>
        </div>
      </Modal>
    </div>
  );
}
