import React from 'react';
import { useNavigate } from 'react-router-dom';
import './styles.scss';

const CartButtons = ({ storage, totalPrice, totalAmount, createOrder }) => {
  const navigate = useNavigate();
  const goBack = () => navigate('/');
  const makeOrder = () => {
    const orderedPizzas = storage.map(
      ({ dough, size, price, quantity, name }) => {
        return { dough, size, price, amount: quantity, pizzaName: name };
      }
    );
    const finalOrder = { totalPrice, totalAmount, orderedPizzas };
    createOrder({
      variables: {
        input: finalOrder,
        optimisticResponse: {
          id: '111',
          __typename: 'Order',
          ...finalOrder,
        },
      },
    });
  };

  return (
    <div className="cart_buttons">
      <button className="cart_button1" onClick={goBack}>
        Вернуться назад
      </button>
      <button className="cart_button2" onClick={makeOrder}>
        Оплатить сейчас
      </button>
    </div>
  );
};

export default CartButtons;
