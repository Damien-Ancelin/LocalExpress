import Product from '../Product/Product';

export default function Products() {
  return (
    <div className="category__container">
      <section className="category">
        <h2 className="category__title">Fruits & Légumes</h2>
        <div className="product__container">
          <Product />
          <Product />
          <Product />
          <Product />
        </div>
      </section>

      <section className="category">
        <h2 className="category__title">Mobilier</h2>
        <div className="product__container">
          <Product />
          <Product />
          <Product />
          <Product />
        </div>
      </section>
    </div>
  );
}
