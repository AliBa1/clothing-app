import ProductBannerWide from '@/components/ProductBannerWide';
import { mockProducts } from '@/interfaces/brandProducts';

export default function Home() {
  return (
    <main>
      <ProductBannerWide product={mockProducts[0]} />
      <ProductBannerWide product={mockProducts[1]} colorVariant={mockProducts[1].colors[2]} />
    </main>
  );
}
