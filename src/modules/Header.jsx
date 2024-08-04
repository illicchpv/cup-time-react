import {Link, useLocation} from "react-router-dom";
import {useCart} from "../context/CartContext";
import {calcTotalCount} from "../const";
import {useProduct} from "../context/ProductContext";

export const Header = () => {
  const location = useLocation();
  const {cart} = useCart();
  const totalCnt = calcTotalCount(cart);
  const {categories} = useProduct();

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
            {Object.keys(categories).map((category) =>
              <li className="header__menu-item" key={category}>
                <Link className={`header__menu-link ${getActiveClass(category)}`}
                  to={`/products?category=${category}`}
                >{categories[category]}
                </Link>
              </li>)
            }
          </ul>
        </nav>

        <Link className="header__cart-link" to="/cart">{totalCnt}</Link>
      </div>
    </header>
  );
};
