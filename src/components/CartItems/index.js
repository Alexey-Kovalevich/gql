import React from 'react';
import CartItem from '../CartItem';
import './styles.scss';

const CartItems = ({ storage, removePizza }) => {
  return (
    <div className="cart_orders">
      {storage.map((item, index) => {
        return <CartItem key={index} item={item} removePizza={removePizza} />;
      })}
    </div>
  );
};

export default CartItems;
