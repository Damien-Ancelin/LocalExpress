import type { ProductInCart } from '@/@types';
import { useAppDispatch } from '@/hooks/redux';
import { removeFromCart, updateQuantity } from '@/store/features/cartSlice';

type CartProductProps = {
  product: ProductInCart;
};

export default function CartProduct({ product }: CartProductProps) {
  const dispatch = useAppDispatch();

  function updateProductQuantity(event: React.ChangeEvent<HTMLInputElement>) {
    const newQuantity = event.target.valueAsNumber;
    if (newQuantity === 0) {
      removeProduct();
    }
    if (newQuantity) {
      dispatch(updateQuantity({ id: product.id, quantity: newQuantity }));
    }
  }

  function removeProduct() {
    dispatch(removeFromCart(product.id));
  }

  return (
    <article className="cart-product">
      <img
        className="cart-product__image"
        alt={product.title}
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
            onChange={updateProductQuantity}
          />
          <p className="cart-product__price">
            {(product.price * product.quantity).toFixed(2)}&nbsp;€
          </p>
        </main>
      </div>
    </article>
  );
}
