import image from '../../../assets/images/pommes.webp';
import './CartProduct.scss';

export default function CartProduct() {
  return (
    <article className="cart-product">
      <img
        className="cart-product__image"
        alt="Panier de pommes rouge"
        src={image}
      />
      <div className="cart-product__details">
        <header className="cart-product__header">
          <h3 className="cart-product__title">Pommes</h3>
          <i className="cart-product__icon">X</i>
        </header>

        <main className="cart-product__main">
          <p className="cart-product__text">Quantité:</p>
          <input
            className="cart-product__quantity"
            type="number"
            value="3"
            disabled
          />
          <p className="cart-product__price">6€</p>
        </main>
      </div>
    </article>
  );
}
