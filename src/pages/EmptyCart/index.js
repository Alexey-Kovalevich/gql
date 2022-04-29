import React from 'react';
import { Link } from 'react-router-dom';
import emptyCart from '../../assets/images/empty_cart.svg';
import './styles.scss';

const EmptyCart = () => {
  return (
    <div className="cart-empty">
      <h2>Корзина пустая</h2>
      <p className="cart-empty_text">
        Вероятней всего, вы не заказывали ещё пиццу. Для того, чтобы заказать
        пиццу, перейди на главную страницу.
      </p>
      <img src={emptyCart} alt="empty" />
      <Link to="/" className="black_button">
        На главную
      </Link>
    </div>
  );
};

export default EmptyCart;
