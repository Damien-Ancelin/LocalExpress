import type { ProductInCart } from '@/@types';
import { useAppDispatch } from '@/hooks/redux';
import { removeFromCart } from '@/store/features/tasksSlice';

type CartProductProps = {
  product: ProductInCart;
};

export default function CartProduct({ product }: CartProductProps) {
  const dispatch = useAppDispatch();

  function updateQuantity(event: React.ChangeEvent<HTMLInputElement>) {
    //const newQuantity = event.target.valueAsNumber;
    const newQuantity = 2;
    console.log(newQuantity);
    if (newQuantity) {
      dispatch(updateQuantity({ id: product.id, quantity: newQuantity }));
    }
  }

  function removeProduct(productId: number) {
    dispatch(removeFromCart(productId));
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
            onClick={() => removeProduct(product.id)}
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
            min={1}
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
