import type { ProductInCart } from '@/@types';
import CartProduct from '../CartProduct/CartProduct';

type CartProps = {
  products: ProductInCart[];
  setCartProducts: React.Dispatch<React.SetStateAction<ProductInCart[]>>;
};

export default function Cart({ products, setCartProducts }: CartProps) {
  const total = products.reduce(
    (previous, current) => previous + current.price * current.quantity,
    0,
  );

  function emptyCart() {
    setCartProducts([]);
  }

  return (
    <div className="cart__container">
      <button className="cart__empty-button" onClick={emptyCart} type="button">
        vider le panier
      </button>
      <div className="cart__product-container">
        {products.map((product) => (
          <CartProduct
            key={product.id}
            product={product}
            setCartProducts={setCartProducts}
          />
        ))}
      </div>
      <div className="cart__order-details">
        <h3 className="cart__order-title">
          Total&nbsp;: {total.toFixed(2)}&nbsp;€
        </h3>
        <button className="cart__order-button" type="button">
          commander
        </button>
      </div>
    </div>
  );
}
