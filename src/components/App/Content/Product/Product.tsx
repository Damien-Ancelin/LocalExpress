import type { Product as TProduct } from '@/@types';

type ProductProps = {
  product: TProduct;
};

export default function Product({ product }: ProductProps) {
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
          <button className="product__button" type="button">
            Ajouter
          </button>
        </div>
      </article>
    </>
  );
}
