
import {products} from "../products";
import {CartItem} from "./CartItem";

export const Cart = () => {
  const selected = products.filter((product) => product.in);

  return (
    <section className="cart">
      <div className="container cart__container">
        <h2 className="cart__title">Корзина <span>(6)</span></h2>

        <ul className="cart__items">
          {selected.map((product) => (
            <CartItem key={product.id} {...product} />
          ))}
        </ul>

        <div className="cart__summary">
          <h3 className="cart__summary-title">Итого:</h3>
          <p className="cart__total">2200&nbsp;₽</p>

          <button className="cart__order-button" type="submit" form="delivery-form">Заказать</button>
        </div>
      </div>
    </section>
  );
};
