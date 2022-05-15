import React from 'react';

const Order = ({ name, dough, size, amount, price }) => {
  const finalPrice = amount * price;
  return (
    <div className="orders_item">
      <h4 className="item_name">{name}</h4>
      <p className="item_info">{dough}</p>
      <p className="item_info">{size}см</p>
      <p className="item_info">{amount}шт</p>
      <p className="item_info">${finalPrice}</p>
    </div>
  );
};

export default Order;
