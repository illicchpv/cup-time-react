import {Product} from "./Product";

const products = [
  {id: 1, title: "Кокосовая матча", price: 390, image: "./image/chai/photo-2.jpg"},
  {id: 2, title: "Зеленый индонезийский чай", price: 340, image: "./image/chai/photo-1.jpg"},
  {id: 3, title: "Черный чай из Эфиопии", price: 250, image: "./image/chai/photo.jpg"},
  {id: 4, title: "Красный чай", price: 290, image: "./image/chai/photo-3.jpg"},
  {id: 5, title: "Апельсиновый чай", price: 390, image: "./image/chai/photo-4.jpg"},
  {id: 6, title: "Ананасовый чай", price: 390, image: "./image/chai/photo-5.jpg"},
];

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
