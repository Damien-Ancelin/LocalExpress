import type { GroupedProducts } from '@/@types';
import { useCartContext } from '@/contexts/CartContext';
import Product from '../Product/Product';

type ProductsProps = {
  products: GroupedProducts;
};

export default function Products({ products }: ProductsProps) {
  const { setCartProducts } = useCartContext();
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
                setCartProducts={setCartProducts}
              />
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}
