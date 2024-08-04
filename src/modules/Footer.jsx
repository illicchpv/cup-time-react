import {Link} from "react-router-dom";

export const Footer = () => {
  const getActiveClass = (category) => {
    const currentCategory = new URLSearchParams(location.search).get("category");
    return currentCategory === category ? "active" : "";
  };
  
  return (
    <footer className="footer">
      <div className="container footer__container">
        <a className="footer__logo-link" href="#">
          <img className="footer__logo" src="./image/logo.svg" alt="Cup time логотип" />
        </a>

        <div className="footer__nav">
          <ul className="footer__menu">
            <li className="ooter__menu-item">
              <Link className={`ooter__menu-link ${getActiveClass("tea")}`} to="/products?category=tea">Чай</Link>
            </li>
            <li className="ooter__menu-item">
              <Link  className={`ooter__menu-link ${getActiveClass("coffee")}`} to="/products?category=coffee">Кофе</Link>
            </li>
            <li className="ooter__menu-item">
              <Link className={`ooter__menu-link ${getActiveClass("teapots")}`} to="/products?category=teapots">Чайники</Link>
            </li>
            <li className="ooter__menu-item">
              <Link className={`ooter__menu-link ${getActiveClass("cezves")}`} to="/products?category=cezves">Турки</Link>
            </li>
            <li className="ooter__menu-item">
              <Link className={`ooter__menu-link ${getActiveClass("other")}`} to="/products?category=other">Прочее</Link>
            </li>

          </ul>
        </div>

        <div className="footer__info">
          <p className="footer__copyright">&copy;CUPTIME, 2024</p>

          <ul className="footer__developers">
            <li className="footer__developer">Designer:
              <a className="footer__developer-link" href="#">Anastasia Ilina</a>
            </li>
            <li className="footer__developer">Developer:
              <a className="footer__developer-link" href="#">Pavel</a>
            </li>
          </ul>
        </div>

        <div className="footer__contacts">
          <a className="footer__email" href="mailto:CUPTIME@gmail.com">CUPTIME@gmail.com</a>

          <ul className="footer__social">
            <li className="footer__social-item">
              <a className="footer__social-link" href="#">
                <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M13 0C5.824 0 0 5.824 0 13C0 20.176 5.824 26 13 26C20.176 26 26 20.176 26 13C26 5.824 20.176 0 13 0ZM19.032 8.84C18.837 10.894 17.992 15.886 17.563 18.187C17.381 19.162 17.017 19.487 16.679 19.526C15.925 19.591 15.353 19.032 14.625 18.551C13.481 17.797 12.831 17.329 11.726 16.601C10.439 15.756 11.271 15.288 12.012 14.534C12.207 14.339 15.535 11.31 15.6 11.037C15.609 10.9957 15.6078 10.9527 15.5965 10.9119C15.5852 10.8712 15.5641 10.8338 15.535 10.803C15.457 10.738 15.353 10.764 15.262 10.777C15.145 10.803 13.325 12.012 9.776 14.404C9.256 14.755 8.788 14.937 8.372 14.924C7.904 14.911 7.02 14.664 6.357 14.443C5.538 14.183 4.901 14.04 4.953 13.585C4.979 13.351 5.304 13.117 5.915 12.87C9.711 11.219 12.233 10.127 13.494 9.607C17.108 8.099 17.849 7.839 18.343 7.839C18.447 7.839 18.694 7.865 18.85 7.995C18.98 8.099 19.019 8.242 19.032 8.346C19.019 8.424 19.045 8.658 19.032 8.84Z" fill="white" />
                </svg>
              </a>
            </li>

            <li className="footer__social-item">
              <a className="footer__social-link" href="#">
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M13.3337 20.0001L20.2537 16.0001L13.3337 12.0001V20.0001ZM28.747 9.56008C28.9203 10.1867 29.0403 11.0267 29.1203 12.0934C29.2137 13.1601 29.2537 14.0801 29.2537 14.8801L29.3337 16.0001C29.3337 18.9201 29.1203 21.0667 28.747 22.4401C28.4137 23.6401 27.6403 24.4134 26.4403 24.7467C25.8137 24.9201 24.667 25.0401 22.907 25.1201C21.1737 25.2134 19.587 25.2534 18.1203 25.2534L16.0003 25.3334C10.4137 25.3334 6.93366 25.1201 5.56033 24.7467C4.36033 24.4134 3.58699 23.6401 3.25366 22.4401C3.08033 21.8134 2.96033 20.9734 2.88033 19.9067C2.78699 18.8401 2.74699 17.9201 2.74699 17.1201L2.66699 16.0001C2.66699 13.0801 2.88033 10.9334 3.25366 9.56008C3.58699 8.36008 4.36033 7.58675 5.56033 7.25341C6.18699 7.08008 7.33366 6.96008 9.09366 6.88008C10.827 6.78675 12.4137 6.74675 13.8803 6.74675L16.0003 6.66675C21.587 6.66675 25.067 6.88008 26.4403 7.25341C27.6403 7.58675 28.4137 8.36008 28.747 9.56008Z" fill="white" />
                </svg>
              </a>
            </li>

            <li className="footer__social-item">
              <a className="footer__social-link" href="#">
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M16 3C8.82021 3 3 8.82021 3 16C3 23.1798 8.82021 29 16 29C23.1798 29 29 23.1798 29 16C29 8.82021 23.1798 3 16 3ZM20.9996 17.667C20.9996 17.667 22.1493 18.8018 22.4323 19.3285C22.4404 19.3394 22.4445 19.3502 22.4472 19.3556C22.5623 19.5493 22.5894 19.6996 22.5325 19.812C22.4377 19.9989 22.1127 20.0909 22.0017 20.0991H19.9704C19.8296 20.0991 19.5344 20.0625 19.1769 19.816C18.902 19.6238 18.6311 19.3082 18.3671 19.0008C17.973 18.5431 17.6318 18.1477 17.2878 18.1477C17.2441 18.1476 17.2007 18.1545 17.1592 18.168C16.8992 18.252 16.566 18.623 16.566 19.6116C16.566 19.9203 16.3223 20.0977 16.1503 20.0977H15.22C14.9031 20.0977 13.2524 19.9867 11.7899 18.4443C9.99969 16.5552 8.38823 12.7662 8.37469 12.731C8.27312 12.4859 8.48302 12.3546 8.71187 12.3546H10.7634C11.037 12.3546 11.1264 12.5211 11.1886 12.6687C11.2618 12.8407 11.5299 13.5246 11.97 14.2937C12.6836 15.5477 13.121 16.0569 13.4718 16.0569C13.5375 16.0561 13.6021 16.0394 13.66 16.0081C14.1177 15.7535 14.0324 14.1218 14.0121 13.7832C14.0121 13.7196 14.0107 13.0533 13.7765 12.7337C13.6085 12.5022 13.3228 12.4142 13.1495 12.3817C13.2196 12.2849 13.3121 12.2064 13.419 12.1528C13.7331 11.9957 14.2992 11.9727 14.8611 11.9727H15.174C15.7833 11.9808 15.9404 12.0201 16.1611 12.0756C16.608 12.1826 16.6175 12.471 16.5782 13.4582C16.566 13.7385 16.5539 14.0554 16.5539 14.4292C16.5539 14.5104 16.5498 14.5971 16.5498 14.6892C16.5363 15.1916 16.52 15.7617 16.8748 15.9959C16.9211 16.025 16.9745 16.0404 17.0292 16.0406C17.1524 16.0406 17.5234 16.0406 18.5282 14.3168C18.8381 13.7619 19.1074 13.1853 19.334 12.5916C19.3543 12.5564 19.4139 12.448 19.4843 12.406C19.5362 12.3795 19.5939 12.3661 19.6522 12.3668H22.064C22.3267 12.3668 22.5068 12.406 22.5406 12.5076C22.6002 12.6687 22.5298 13.1603 21.4289 14.6512L20.9373 15.2999C19.9393 16.608 19.9393 16.6744 20.9996 17.667Z"
                    fill="white" />
                </svg>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};
