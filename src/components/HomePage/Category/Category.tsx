import './Category.scss';
import Product from '../Product/Product';

// TODO Revoir la découpe des composants
// TODO Revoir scss > Product / Category

export default function Category() {
  return (
    <div className="category__container">
      <section className="category">
        <h2 className="category__tilte">Fruits & Légumes</h2>
        <div className="product__container">
          <Product />
        </div>
      </section>

      <section className="category">
        <h2 className="category__tilte">Mobilier</h2>
        <div className="product__container">
          <Product />
        </div>
      </section>
    </div>
  );
}
