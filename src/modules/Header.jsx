import {Link, useLocation} from "react-router-dom";
import {useCart} from "../context/CartContext";
import {calcTotalCount} from "../const";

export const Header = () => {
  const location = useLocation();
  const {cart} = useCart();
  const totalCnt = calcTotalCount(cart);  

  const getActiveClass = (category) => {
    const currentCategory = new URLSearchParams(location.search).get("category");
    return currentCategory === category ? "active" : "";
  };

  return (
    <header className="header">
      <div className="container header__container">
        <Link className="header__logo-link" to="/">
          <img className="header__logo" src="./image/logo.svg" alt="Cup time логотип" />
        </Link>

        <nav className="header__nav">
          <ul className="header__menu">
            <li className="header__menu-item">
              <Link className={`header__menu-link ${getActiveClass("tea")}`} to="/products?category=tea">Чай</Link>
            </li>
            <li className="header__menu-item">
              <Link  className={`header__menu-link ${getActiveClass("coffee")}`} to="/products?category=coffee">Кофе</Link>
            </li>
            <li className="header__menu-item">
              <Link className={`header__menu-link ${getActiveClass("teapots")}`} to="/products?category=teapots">Чайники</Link>
            </li>
            <li className="header__menu-item">
              <Link className={`header__menu-link ${getActiveClass("cezves")}`} to="/products?category=cezves">Турки</Link>
            </li>
            <li className="header__menu-item">
              <Link className={`header__menu-link ${getActiveClass("other")}`} to="/products?category=other">Прочее</Link>
            </li>
          </ul>
        </nav>

        <Link className="header__cart-link" to="/cart">{totalCnt}</Link>
      </div>
    </header>
  );
};
