import { useAppDispatch, useAppSelector } from '@/hooks/redux';
import { emptyCart } from '@/store/features/tasksSlice';
import CartProduct from '../CartProduct/CartProduct';

export default function Cart() {
  const dispatch = useAppDispatch();

  const cart = useAppSelector((state) => state.cart);

  const total = cart.cartProducts.reduce(
    (previous, current) => previous + current.price * current.quantity,
    0,
  );

  function emptyTheCart() {
    dispatch(emptyCart());
  }

  return (
    <div className="cart__container">
      <button
        className="cart__empty-button"
        onClick={emptyTheCart}
        type="button"
      >
        vider le panier
      </button>
      <div className="cart__product-container">
        {cart.cartProducts.map((product) => (
          <CartProduct key={product.id} product={product} />
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
