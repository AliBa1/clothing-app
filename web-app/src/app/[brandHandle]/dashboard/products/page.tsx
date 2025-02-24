'use client';
import { mockProducts } from '@/interfaces/brandProducts';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

export default function DashboardProductsPage() {
  const brandHandle = usePathname().split('/')[1];
  const brandProducts = mockProducts.filter(
    (p) => p.brand.handle === brandHandle
  );
  return (
    <div className='flex flex-col w-full'>
      <div className='flex w-full items-center justify-between'>
        <h4>Products</h4>
        <div className='flex gap-4'>
          <button className='btn-primary text-base min-h-8 md:px-4'>New Product</button>
          <button className='btn-secondary text-base min-h-8 md:px-4'>New Colorway</button>
        </div>
      </div>
      <div className='rounded overflow-x-scroll'>
      <table className='table table-auto w-full'>
        <thead className='bg-slate-600'>
          <tr>
            <th className='px-4 py-2'>ID</th>
            <th className='px-4 py-2'>Image</th>
            <th className='px-4 py-2'>Name</th>
            <th className='px-4 py-2'>Price</th>
            <th className='px-4 py-2'>Color</th>
            <th className='px-4 py-2'>Category</th>
            <th className='px-4 py-2'>Subcategory</th>
            {/* <th className='px-4 py-2'>Types</th> */}
            <th className='px-4 py-2'>Discount</th>
          </tr>
        </thead>
        <tbody>
          {brandProducts.map((p) =>
            p.colors.map((cV) => (
              <tr key={cV.id} className='text-center border-b border-x'>
                <td className='px-4 py-2'>{cV.id}</td>
                <td className='px-4 py-2'>
                  <Image
                    src={cV.images.cover}
                    alt={`${p.name} Cover Image`}
                    height={1280 / 8}
                    width={1024 / 8}
                    className='aspect-[4/5] rounded object-cover object-center bg-background dark:bg-white'
                    loading='lazy'
                  />
                </td>
                <td className='px-4 py-2'>{p.name}</td>
                <td className='px-4 py-2'>${cV.price}</td>
                <td className='px-4 py-2'>{cV.colorName}</td>
                <td className='px-4 py-2'>
                  {p.categories.map((c) => c.label).join(', ')}
                </td>
                <td className='px-4 py-2'>
                  {p.subCategories.map((sC) => sC.label).join(', ')}
                </td>
                {/* <td className='px-4 py-2'>{p.types.map((t) => t.label).join(', ')}</td> */}
                <td className='px-4 py-2'>
                  {cV.discount
                    ? cV.discount.type === 'percent'
                      ? `${cV.discount.amount}% Off`
                      : `$${cV.discount.amount} Off`
                    : 'None'}
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
      </div>
    </div>
  );
}
