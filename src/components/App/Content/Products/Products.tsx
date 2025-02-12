import type { GroupedProducts } from '@/@types';
import { useAppSelector } from '@/hooks/redux';
import Product from '../Product/Product';

type ProductsProps = {
  products: GroupedProducts;
};

export default function Products({ products }: ProductsProps) {
  const cart = useAppSelector((state) => state.cart);
  const currentCart = cart.cartProducts;

  return (
    <div className="category__container">
      {Object.entries(products).map(([category, items]) => (
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
