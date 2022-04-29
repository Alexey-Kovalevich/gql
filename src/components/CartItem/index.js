import React from 'react';
import pizza from '../../assets/images/pizza.png';
import './styles.scss';

const CartItem = () => {
  return (
    <div className="order">
      <div className="order_desc">
        <img src={pizza} alt="pizza-img" className="desc_img" />
        <div className="desc_general">
          <h4 className="desc_title">Сырный цыпленок</h4>
          <p className="desc_p">тонкое тесто, 26 см</p>
        </div>
      </div>
      <div className="order_count">
        <button className="count_button">-</button>
        <p className="count_value">1</p>
        <button className="count_button">+</button>
      </div>
      <h4 className="order_price">200</h4>
      <button className="order_remove">X</button>
    </div>
  );
};

export default CartItem;
