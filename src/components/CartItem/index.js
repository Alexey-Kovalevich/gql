import React from 'react';
import pizza from '../../assets/images/pizza.png';
import './styles.scss';

const CartItem = ({ item }) => {
  const { id, name, dough, size, price } = item;
  const removePizza = () => {
    console.log('remove');
    // removeFromCart(id);
  };
  return (
    <div className="order">
      <div className="order_desc">
        <img src={pizza} alt="pizza-img" className="desc_img" />
        <div className="desc_general">
          <h4 className="desc_title">{name}</h4>
          <p className="desc_p">
            {dough}, {size} см
          </p>
        </div>
      </div>
      <div className="order_count">
        <button className="count_button">-</button>
        <p className="count_value">1</p>
        <button className="count_button">+</button>
      </div>
      <h4 className="order_price">${price}</h4>
      <button className="order_remove" onClick={removePizza}>
        X
      </button>
    </div>
  );
};

export default CartItem;
