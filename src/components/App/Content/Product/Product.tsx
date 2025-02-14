import type { ProductInCart, Product as TProduct } from '@/@types';
import { useAppDispatch } from '@/hooks/redux';
import { addCart, updateCartProduct } from '@/store/features/cartSlice';
import { useState } from 'react';
import { createPortal } from 'react-dom';
import ProductsDetails from './ProductDetails';

type ProductProps = {
  product: TProduct;
  currentCart: ProductInCart[];
};

export default function Product({ product, currentCart }: ProductProps) {
  const dispatch = useAppDispatch();
  const [showModal, setShowModal] = useState(false);

  const openModal = (event?: React.MouseEvent<HTMLElement>) => {
    const element = event?.target as HTMLElement;
    if (element.classList.contains('product__button')) {
      return;
    }

    setShowModal(true);
  };
  const closeModal = (event?: React.MouseEvent<HTMLButtonElement>) => {
    event?.stopPropagation();
    setShowModal(false);
  };

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
      {/* biome-ignore lint/a11y/useKeyWithClickEvents: <explanation> */}
      <article className="product__card" onClick={openModal}>
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
      {showModal &&
        createPortal(
          <ProductsDetails product={product} onClose={closeModal} />,
          document.getElementById('modal-portal') as HTMLElement,
        )}
    </>
  );
}
