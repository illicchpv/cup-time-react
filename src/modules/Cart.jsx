
import {calcTotalCount} from "../const";
import {useCart} from "../context/CartContext";
import {CartItem} from "./CartItem";

export const Cart = () => {
  const {cart} = useCart();
  if (!cart) return;

  const totalCnt = calcTotalCount(cart);

  return (
    <section className="cart">
      <div className="container cart__container">
        {totalCnt ? <h2 className="cart__title">Корзина <span>({totalCnt})</span></h2>: <h2 className="cart__title">Корзина пуста.</h2>}
        

        {!totalCnt || (<>
          <ul className="cart__items">
            {cart.map((product) => (
              <CartItem key={product.id} {...product} />
            ))}
          </ul>

          <div className="cart__summary">
            <h3 className="cart__summary-title">Итого:</h3>
            <p className="cart__total">{cart.reduce((acc, p) => acc + p.price * p.quantity, 0)}&nbsp;₽</p>

            <button className="cart__order-button" type="submit" form="delivery-form">Заказать</button>
          </div>
        </>)}

      </div>
    </section>
  );
};
