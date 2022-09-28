import React from 'react';
import { SERVER_URL } from '../../helpers/consts';
import './styles.scss';

const CartItem = ({ item, removePizza }) => {
  console.log(item);
  const { id, name, dough, size, price, quantity, image } = item;
  const handleRemove = () => {
    removePizza(id, dough, size);
  };
  return (
    <div className="order">
      <div className="order_desc">
        <img
          src={`${SERVER_URL}${image}`}
          alt="pizza-img"
          className="desc_img"
        />
        <div className="desc_general">
          <h4 className="desc_title">{name}</h4>
          <p className="desc_p">
            {dough}, {size} см
          </p>
        </div>
      </div>
      <div className="order_count">
        <p className="count_value">{quantity}</p>
      </div>
      <h4 className="order_price">${price}</h4>
      <button className="order_remove" onClick={handleRemove}>
        X
      </button>
    </div>
  );
};

export default CartItem;
