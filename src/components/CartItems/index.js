import React from 'react';
import CartItem from '../CartItem';
import './styles.scss';

const CartItems = ({ storage }) => {
  return (
    <div className="cart_orders">
      {storage.map((item) => {
        return <CartItem key={item.id} item={item} />;
      })}
    </div>
  );
};

export default CartItems;
