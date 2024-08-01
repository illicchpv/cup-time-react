import {products} from "../products";
import {Product} from "./Product";

export const Products = () => {
  return (
    <section className="products">
      <div className="container">
        <h2 className="products__title">Чай</h2>

        <ul className="products__list">
          {products.map((product) => (
            <Product key={product.id} {...product} />
          ))}
        </ul>
      </div>
    </section>
  );
};
