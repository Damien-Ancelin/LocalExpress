import Product from '../Product/Product';
import Footer from './Footer/Footer';
import Header from './Header/Header';

export default function HomePage() {
  return (
    <>
      <Header />

      {/* TODO: <Category /> */}
      <section className="category">
        <h2 className="category__tilte">Fruits & Légumes</h2>
        {/* TODO: <Products /> */}
        <div className="product__container">
          <Product />
        </div>
      </section>

      <Footer />
    </>
  );
}
