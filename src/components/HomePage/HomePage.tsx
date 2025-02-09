import './HomePages.scss';
import Cart from './Cart/Cart';
import Category from './Category/Category';
import Footer from './Footer/Footer';
import Header from './Header/Header';

export default function HomePage() {
  return (
    <>
      <Header />
      <main className="container">
        <Category />
        <Cart />
      </main>
      <Footer />
    </>
  );
}
