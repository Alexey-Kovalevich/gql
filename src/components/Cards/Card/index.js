import React, { useState } from 'react';
import CardButton from './CardButton';
import { addToCart } from '../../../helpers/cart';
import { SERVER_URL } from '../../../helpers/consts';
import './styles.scss';

const Card = ({ pizza }) => {
  const { id, name, modifications, image } = pizza;
  const doughTypes = [...new Set(modifications.map(({ dough }) => dough))];
  const sizeTypes = [...new Set(modifications.map(({ size }) => size))];
  const {
    dough: initialDough,
    price: initialPrice,
    size: initialSize,
  } = modifications[0];

  const [dough, setDough] = useState(initialDough);
  const [size, setSize] = useState(initialSize);
  const [price, setPrice] = useState(initialPrice);

  const changeDough = (value) => {
    setDough(value);
    changePrice(value, size);
  };

  const changeSize = (value) => {
    setSize(value);
    changePrice(dough, value);
  };

  const changePrice = (dough, size) => {
    const modification = modifications.find(
      (item) => item.dough === dough && item.size === size
    );
    if (modification) {
      setPrice(modification.price);
    }
  };

  const handleClick = () => {
    addToCart({ id, name, dough, size, price, image });
  };

  return (
    <div className="card">
      <img className="card_image" src={`${SERVER_URL}${image}`} alt="pizza" />
      <h3 className="card_title">{name}</h3>
      <div className="card_filters">
        <div className="filters_size">
          {doughTypes.map((item, index) => {
            const clickHandler = () => changeDough(item);
            return (
              <CardButton
                key={index}
                value={item}
                param={dough}
                measure=""
                clickHandler={clickHandler}
              />
            );
          })}
        </div>
        <div className="filters_size">
          {sizeTypes.map((item, index) => {
            const clickHandler = () => changeSize(item);
            return (
              <CardButton
                key={index}
                value={item}
                param={size}
                measure="см"
                clickHandler={clickHandler}
              />
            );
          })}
        </div>
      </div>
      <div className="card_footer">
        <p className="card_price">${price}</p>
        <button className="card_add" onClick={handleClick}>
          <p>+</p>
          <p>Добавить</p>
        </button>
      </div>
    </div>
  );
};

export default Card;
