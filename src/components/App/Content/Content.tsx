import Cart from './Cart/Cart';
import Products from './Products/Products';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';

export default function Content() {
  return (
    <>
      <Header />
      <main className="container">
        <Products />
        <Cart />
      </main>
      <Footer />
    </>
  );
}
