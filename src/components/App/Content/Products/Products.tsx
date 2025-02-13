import { useAppSelector } from '@/hooks/redux';
import Product from '../Product/Product';

export default function Products() {
  const products = useAppSelector((state) => state.products.products);
  const cart = useAppSelector((state) => state.cart);
  const currentCart = cart.cartProducts;
  return (
    <div className="category__container">
      {Object.entries(...products).map(([category, items]) => (
        <section key={category} className="category">
          <h2 className="category__title">{category}</h2>
          <div className="product__container">
            {items.map((product) => (
              <Product
                key={product.id}
                product={product}
                currentCart={currentCart}
              />
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}
