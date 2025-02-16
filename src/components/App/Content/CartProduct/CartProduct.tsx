import type { ProductInCart } from '@/@types';

type CartProductProps = {
  product: ProductInCart;
  setCartProducts: React.Dispatch<React.SetStateAction<ProductInCart[]>>;
};

export default function CartProduct({
  product,
  setCartProducts,
}: CartProductProps) {
  function updateQuantity(event: React.ChangeEvent<HTMLInputElement>) {
    const newQty = event.currentTarget.valueAsNumber;

    if (newQty === 0) {
      removeProduct();
    }

    setCartProducts((currentCart) => {
      return currentCart.map((p) => {
        if (p.id === product.id) {
          p.quantity = newQty;
        }

        return p;
      });
    });
  }

  function removeProduct() {
    setCartProducts((currentCart) =>
      currentCart.filter((p) => p.id !== product.id),
    );
  }

  return (
    <article className="cart-product">
      <img
        className="cart-product__image"
        alt="Panier de pommes rouge"
        src={product.thumbnail}
      />
      <div className="cart-product__details">
        <header className="cart-product__header">
          <h3 className="cart-product__title">{product.title}</h3>
          <button
            type="button"
            className="cart-product__icon"
            onClick={removeProduct}
          >
            X
          </button>
        </header>

        <main className="cart-product__main">
          <p className="cart-product__text">Quantité:</p>
          <input
            className="cart-product__quantity"
            name="qty"
            type="number"
            min={0}
            max={product.stock}
            value={product.quantity}
            onChange={updateQuantity}
          />
          <p className="cart-product__price">
            {(product.price * product.quantity).toFixed(2)}&nbsp;€
          </p>
        </main>
      </div>
    </article>
  );
}
