import { useEffect } from 'react';

import { useAppDispatch, useAppSelector } from '@/hooks/redux';
import { fetchProducts } from '@/store/features/ProductsSlice';

import type { GroupedProducts } from '@/@types';

import { groupByKey } from '@/utils';

import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Cart from './Cart/Cart';
import Products from './Products/Products';

export default function Content() {
  const dispatch = useAppDispatch();

  const products = useAppSelector((state) => state.products.products);
  const error = useAppSelector((state) => state.products.error);
  const loading = useAppSelector((state) => state.products.loading);

  const categorizedProducts = groupByKey(
    products,
    'category',
  ) as GroupedProducts;

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  if (error) {
    return <div className="alert alert--danger">{error}</div>;
  }

  if (loading) {
    return <h1>ça charge</h1>;
  }

  return (
    <>
      <Header />
      <main className="container">
        {!loading && (
          <>
            <Products products={categorizedProducts} />
            <Cart />
          </>
        )}
      </main>
      <Footer />
    </>
  );
}
