import {useEffect} from "react";
import {useProduct} from "../context/ProductContext";
// import {products} from "../products";
import {Product} from "./Product";
import {useSearchParams} from "react-router-dom";
import {SkeletonLoader} from "./SkeletonLoader";

export const Products = () => {
  const [searchParams] = useSearchParams();
  const category = searchParams.get('category');
  const {products, setCategory, categories} = useProduct();
  // console.log('products: ', products);

  useEffect(() => {
    setCategory(category);
  }, [category, setCategory]);

  return (
    <section className="products">
      <div className="container">
        <h2 className="products__title">{categories[category]}</h2>

        <ul className="products__list">
          {products.length ? products.map((product) => (
            <Product key={product.id} {...product} />
          )) : <SkeletonLoader />}
        </ul>
      </div>
    </section>
  );
};
