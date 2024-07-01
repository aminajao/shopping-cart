'use client';

import ClientOnly from '@/components/ClientOnly';
import Container from '@/components/Container';
import EmptyState from '@/components/EmptyState';
import ProductCard from 'components/ProductCard';
import { dummyProducts } from 'dummydata';
import { useSearchParams } from 'next/navigation';

import { useEffect, useState } from 'react';

const HomePage = () => {
  const searchParams = useSearchParams();

  const category = searchParams?.get('category')?.toLowerCase();
  console.log(category, 'categorycategory');

  const [filteredProducts, setFilteredProducts] = useState(dummyProducts);

  useEffect(() => {
    if (category) {
      setFilteredProducts(
        dummyProducts.filter(
          (product) => product.category.toLowerCase() === category
        )
      );
    } else {
      setFilteredProducts(dummyProducts);
    }
  }, [category]);

  if (filteredProducts.length === 0) {
    return (
      <ClientOnly>
        <EmptyState showReset />
      </ClientOnly>
    );
  }

  return (
    <Container>
      <div className="grid grid-cols-1 gap-8 pt-24 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 2xl:grid-cols-6">
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </Container>
  );
};

export default HomePage;
