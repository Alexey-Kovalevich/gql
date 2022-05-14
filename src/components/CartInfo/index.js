import React from 'react';
import './styles.scss';

const CartInfo = ({ totalPrice, totalAmount }) => {
  return (
    <div className="cart_info">
      <div className="info">
        <p className="text">Всего пицц:</p>
        <p className="information">{totalAmount} шт</p>
      </div>
      <div className="info">
        <div className="text">Сумма заказа:</div>
        <p className="information">${totalPrice}</p>
      </div>
    </div>
  );
};

export default CartInfo;
