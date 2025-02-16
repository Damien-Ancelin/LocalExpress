import { useCartContext } from '@/contexts/CartContext';
import CartProduct from '../CartProduct/CartProduct';

export default function Cart() {
  const { cartProducts, setCartProducts } = useCartContext();
  const total = cartProducts.reduce(
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
        {cartProducts.map((product) => (
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
