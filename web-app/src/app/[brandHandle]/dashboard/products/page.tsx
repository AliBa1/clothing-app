'use client';
import { mockProducts } from '@/interfaces/brandProducts';
import { usePathname } from 'next/navigation';

export default function DashboardProductsPage() {
  const brandHandle = usePathname().split('/')[1];
  const brandProducts = mockProducts.filter(
    (p) => p.brand.handle === brandHandle
  );
  return (
    <div>
      <table>
        <thead className='bg-secondary'>
          <tr>
            <th>Name</th>
            <th>Color</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {brandProducts.map((p) =>
            p.colors.map((cV) => (
              <tr key={cV.id} className='border-b'>
                <td>{p.name}</td>
                <td>{cV.colorName}</td>
                <td>{cV.price}</td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}
