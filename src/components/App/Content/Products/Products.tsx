import type { GroupedProducts, ProductInCart } from '@/@types';
import Product from '../Product/Product';

type ProductsProps = {
  products: GroupedProducts;
  setCartProducts: React.Dispatch<React.SetStateAction<ProductInCart[]>>;
};

export default function Products({ products, setCartProducts }: ProductsProps) {
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
