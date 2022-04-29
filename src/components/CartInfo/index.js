import React from 'react';
import './styles.scss';

const CartInfo = () => {
  return (
    <div className="cart_info">
      <div className="info">
        <p className="text">Всего пицц:</p>
        <p className="information">3 шт</p>
      </div>
      <div className="info">
        <div className="text">Сумма заказа:</div>
        <p className="information">200</p>
      </div>
    </div>
  );
};

export default CartInfo;
