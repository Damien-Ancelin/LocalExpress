import type { GroupedProducts } from '@/@types';

import { api } from '@/services/api';
import { groupByKey } from '@/utils';
import { useEffect, useState } from 'react';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Cart from './Cart/Cart';
import Products from './Products/Products';

export default function Content() {
  const [products, setProducts] = useState<GroupedProducts | null>(null);

  useEffect(() => {
    async function fetchProducts() {
      // ? Destructuration du resultat de l'appel API
      const { products } = await api.getProducts();
      const categorizedProducts = groupByKey(products, 'category');
      setProducts(categorizedProducts);
    }
    fetchProducts();
  }, []);

  // TODO Créer un spinner
  if (!products) {
    return <p>Veuillez patienter</p>;
  }

  return (
    <>
      <Header />
      <main className="container">
        {/* TODO: Mise en place d'un conditionnel ? */}
        <Products products={products} />
        <Cart />
      </main>
      <Footer />
    </>
  );
}
