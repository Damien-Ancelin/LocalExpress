import { useEffect } from 'react';

import { useAppDispatch, useAppSelector } from '@/hooks/redux';
import { fetchProducts } from '@/store/features/ProductsSlice';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Cart from './Cart/Cart';
import Products from './Products/Products';

export default function Content() {
  const dispatch = useAppDispatch();

  const error = useAppSelector((state) => state.products.error);
  const loading = useAppSelector((state) => state.products.loading);
  //const [products, setProducts] = useState<GroupedProducts | null>(null);

  // useEffect(() => {
  //   async function fetchProducts() {
  //     try {
  //       // ? Destructuration du resultat de l'appel API
  //       const { products } = await api.getProducts();
  //       const categorizedProducts = groupByKey(products, 'category');
  //       setProducts(categorizedProducts);
  //     } catch (error) {
  //       console.error(error);
  //     }
  //   }
  //   fetchProducts();
  // }, []);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
    <>
      <Header />
      <main className="container">
        {error && <p style={{ color: 'red' }}>{error}</p>}
        {loading && <p>Chargement en cours…</p>}
        {!loading && (
          <>
            <Products />
            <Cart />
          </>
        )}
      </main>
      <Footer />
    </>
  );
}
