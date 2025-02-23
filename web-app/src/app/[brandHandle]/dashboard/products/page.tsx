'use client';
import { mockProducts } from '@/interfaces/brandProducts';
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
          <button className='btn-primary'>New Product</button>
          <button className='btn-secondary'>New Colorway</button>
        </div>
      </div>
      <table className='border rounded'>
        <thead className='bg-slate-600'>
          <tr>
            <th className='text-start px-4 py-2'>ID</th>
            <th className='text-start px-4 py-2'>Name</th>
            <th className='text-start px-4 py-2'>Categories</th>
            <th className='text-start px-4 py-2'>SubCategories</th>
            <th className='text-start px-4 py-2'>Types</th>
            <th className='text-start px-4 py-2'>Color</th>
            <th className='text-start px-4 py-2'>Price</th>
            <th className='text-start px-4 py-2'>Discount</th>
          </tr>
        </thead>
        <tbody>
          {brandProducts.map((p) =>
            p.colors.map((cV) => (
              <tr key={cV.id} className='border-b last:border-none'>
                <td className='px-4 py-2'>{cV.id}</td>
                <td className='px-4 py-2'>{p.name}</td>
                <td className='px-4 py-2'>{p.categories.map((c) => c.label).join(', ')}</td>
                <td className='px-4 py-2'>{p.subCategories.map((sC) => sC.label).join(', ')}</td>
                <td className='px-4 py-2'>{p.types.map((t) => t.label).join(', ')}</td>
                <td className='px-4 py-2'>{cV.colorName}</td>
                <td className='px-4 py-2'>${cV.price}</td>
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
  );
}
