import {API_URL} from "../const";

/* eslint-disable react/prop-types */
export const Product = ({title, price, img: image}) => {
  return (
    <li className="products_item">
      <article className="product">
        <img className="product__image" src={`${API_URL}${image}`} alt={title} />

        <div className="product__content">
          <h3 className="product__title">{title}</h3>

          <p className="product__price">{price}&nbsp;₽</p>
        </div>
      </article>
    </li>
  );
};
