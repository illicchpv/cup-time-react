import {useEffect} from "react";
import {useProduct} from "../context/ProductContext";
// import {products} from "../products";
import {Product} from "./Product";
import {useSearchParams} from "react-router-dom";

export const Products = () => {
  const [searchParams] = useSearchParams();
  const category = searchParams.get('category');
  const {products, setCategory} = useProduct();
  // console.log('products: ', products);

  useEffect(() => {
    setCategory(category);
  }, [category, setCategory]);

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
