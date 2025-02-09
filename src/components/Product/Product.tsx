import './Product.scss';

export default function Product() {
  return (
    <>
      <article className="product">
        <div>
          <h3 className="product__title">Pommes</h3>
          <img
            className="product__image"
            loading="lazy"
            src="../../images/pommes.webp"
            alt="Panier de pommes"
          />
        </div>
        <div>
          <p className="product__description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente,
            vitae.
          </p>
          <p className="product__price">2€ /Kg</p>
          <button className="product__button" type="button">
            Ajouter
          </button>
        </div>
      </article>
    </>
  );
}
