import type { ProductInCart, Product as TProduct } from '@/@types';
import { useAppDispatch } from '@/hooks/redux';
import { addCart, updateCartProduct } from '@/store/features/cartSlice';

type ProductProps = {
  product: TProduct;
  currentCart: ProductInCart[];
};

export default function Product({ product, currentCart }: ProductProps) {
  const dispatch = useAppDispatch();
  function addToCart() {
    const alreadyInCart = currentCart.find(
      (cartProduct) => cartProduct.id === product.id,
    );
    if (alreadyInCart) {
      dispatch(updateCartProduct(product.id));
      return;
    }
    const newProduct: ProductInCart = {
      ...product,
      quantity: 1,
    };
    dispatch(addCart(newProduct));
  }

  return (
    <>
      <article className="product__card">
        <h3 className="product__title">{product.title}</h3>
        <div>
          <img
            className="product__image"
            loading="lazy"
            src={product.thumbnail}
            alt={product.title}
          />
        </div>
        <div className="product__details">
          <p className="product__description">{product.description}</p>
          <p className="product__price">
            {product.price}&nbsp;<abbr title="EUR">€</abbr>
          </p>
          <button className="product__button" type="button" onClick={addToCart}>
            Ajouter
          </button>
        </div>
      </article>
    </>
  );
}
