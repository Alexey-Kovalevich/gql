/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import CardButton from './CardButton';
import pizzaImage from '../../../assets/images/pizza.png';
import './styles.scss';

const Card = ({ pizza }) => {
  const { name, modifications } = pizza;
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

  return (
    <div className="card">
      <img className="card_image" src={pizzaImage} alt="pizza" />
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
        <button className="card_add">
          <p>+</p>
          <p>Добавить</p>
        </button>
      </div>
    </div>
  );
};

export default Card;
