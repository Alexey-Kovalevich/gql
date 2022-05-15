import React from 'react';
import { Link } from 'react-router-dom';
import './styles.scss';

const Orders = () => {
  return (
    <div className="cart-empty">
      <h2>Заказов нет</h2>
      <p className="cart-empty_text">
        Вероятней всего, вы не заказывали ещё пиццу. Для того, чтобы заказать
        пиццу, перейди на главную страницу.
      </p>
      <Link to="/" className="black_button">
        На главную
      </Link>
    </div>
  );
};

export default Orders;
