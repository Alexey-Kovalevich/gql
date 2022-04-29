import React from 'react';
import './styles.scss';

const CartButtons = () => {
  return (
    <div className="cart_buttons">
      <button className="cart_button1">Вернуться назад</button>
      <button className="cart_button2">Оплатить сейчас</button>
    </div>
  );
};

export default CartButtons;
