import CartProduct from '../CartProduct/CartProduct';

export default function Cart() {
  return (
    <div className="cart__container">
      <button className="cart__empty-button" type="button">
        vider le panier
      </button>
      <div className="cart__product-container">
        <CartProduct />
        <CartProduct />
        <CartProduct />
        <CartProduct />
      </div>
      <div className="cart__order-details">
        <h3 className="cart__order-title">Total: 18€</h3>
        <button className="cart__order-button" type="button">
          commander
        </button>
      </div>
    </div>
  );
}
