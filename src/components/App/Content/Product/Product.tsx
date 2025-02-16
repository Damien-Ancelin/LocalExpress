import type { ProductInCart, Product as TProduct } from '@/@types';
import { useCartContext } from '@/contexts/CartContext';

type ProductProps = {
  product: TProduct;
};

export default function Product({ product }: ProductProps) {
  const { setCartProducts } = useCartContext();
  function addToCart() {
    setCartProducts((currentCart) => {
      // SI le produit est déjà dans le panier
      const alreadyInCart = currentCart.find((p) => p.id === product.id);

      if (alreadyInCart) {
        // ALORS je vais incrémenter sa quantité
        return currentCart.map((p) => {
          if (p.id === product.id) {
            p.quantity = p.quantity + 1;
          }

          return p;
        });
      }

      // SINON
      // ALORS je l'ajoute au panier
      const newProduct: ProductInCart = {
        ...product,
        quantity: 1,
      };

      return [...currentCart, newProduct];
    });
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
