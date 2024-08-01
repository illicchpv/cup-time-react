export const Order = () => {
  return (
    <section className="order">
      <div className="container order__container">
        <h2 className="order__title">Доставка</h2>

        <form className="order-form">
          {/* <fieldset className="order__data-fields"> */}
            <input className="order__input order__input_name" name="name" type="text" placeholder="Имя" />

            <input className="order__input order__input_phone" name="phone" type="tel" placeholder="Телефон" />

            <input className="order__input order__input_address" name="address" type="text" placeholder="Адрес" />
          {/* </fieldset> */}

          <fieldset className="order__payment">
            <h3 className="order__payment-title">Оплата:</h3>

            <label className="order__payment-label">
              <input className="order__radio" type="radio" name="payment" defaultValue="card" />
              картой
            </label>

            <label className="order__payment-label">
              <input className="order__radio" type="radio" name="payment" defaultValue="cash" defaultChecked />
              наличные
            </label>
          </fieldset>
        </form>

      </div>
    </section>
  );
};
