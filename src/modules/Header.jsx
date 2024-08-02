import {Link} from "react-router-dom";

export const Header = () => {
  return (
    <header className="header">
      <div className="container header__container">
        <Link className="header__logo-link" to="/">
          <img className="header__logo" src="./image/logo.svg" alt="Cup time логотип" />
        </Link>

        <nav className="header__nav">
          <ul className="header__menu">
            <li className="header__menu-item">
              <Link className="header__menu-link" to="/products?category=еуф">Чай</Link>
            </li>
            <li className="header__menu-item">
              <a className="header__menu-link" to="/products?category=coffee">Кофе</a>
            </li>
            <li className="header__menu-item">
              <Link className="header__menu-link" to="/products?category=teapots">Чайники</Link>
            </li>
            <li className="header__menu-item">
              <a className="header__menu-link" to="/products?category=cezves">Турки</a>
            </li>
            <li className="header__menu-item">
              <Link className="header__menu-link" to="/products?category=other">Прочее</Link>
            </li>
          </ul>
        </nav>

        <Link className="header__cart-link" to="/cart">6</Link>
      </div>
    </header>
  );
};
