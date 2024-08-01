

export const CartItem = ({id, image, title, price}) => {
  console.log('id: ', id);
  const quantity = 1;
  return (
    <li className="cart-item">
      <img className="cart-item__image" src={image} alt={title} />

      <div className="cart-item__info">
        <h3 className="cart-item__title">{title}</h3>

        <div className="cart-item__quantity">
          <button className="cart-item__quantity-button cart-item__quantity-button_minus">-</button>

          <input className="cart-item__quantity-input" type="number" defaultValue={quantity} />

          <button className="cart-item__quantity-button cart-item__quantity-button_plus">+</button>
        </div>

        <p className="cart-item__price">{price}&nbsp;₽</p>
      </div>
    </li>

  );
};
