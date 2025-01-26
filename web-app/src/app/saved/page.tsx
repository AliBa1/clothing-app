'use client';
import ProductCard from '@/components/ProductCard';
import {
  BrandProduct,
  ColorVariant,
  mockProducts
} from '@/interfaces/brandProducts';
import { savedProducts } from '@/interfaces/userProducts';
import { useEffect, useState } from 'react';

interface FetchedSave {
  product: BrandProduct;
  colorVariant: ColorVariant;
}
export default function SavedPage() {
  const [products, setProducts] = useState<FetchedSave[]>([]);

  useEffect(() => {
    const fetchedProducts = savedProducts
      .map((s) => {
        const product = mockProducts.find((p) => p.id === s.productId);
        if (!product) {
          return null;
        }
        const colorVariant = product.colors.find((c) => c.id === s.colorId);
        if (!colorVariant) {
          return null;
        }
        return {
          product: product,
          colorVariant: colorVariant
        };
      })
      .filter((item): item is FetchedSave => item !== null);
    setProducts(fetchedProducts);
  }, []);
  return (
    <main>
      <h2>Saved</h2>
      <div className='products-grid'>
        {products.map((p) => (
          <ProductCard
            key={`${p.product.id}-${p.colorVariant.id}`}
            product={p.product}
            showBrand={true}
            colorVariant={p.colorVariant}
          />
        ))}
      </div>
    </main>
  );
}
