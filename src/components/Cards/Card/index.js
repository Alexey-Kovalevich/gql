import React, { useState } from 'react';
import pizzaImage from '../../../assets/images/pizza.png';
import './styles.scss';

const Card = ({ pizza }) => {
  const {
    dough: initialDough,
    price: initialPrice,
    size: initialSize,
  } = pizza.modifications[0];

  const doughTypes = [
    ...new Set(pizza.modifications.map(({ dough }) => dough)),
  ];
  const sizeTypes = [...new Set(pizza.modifications.map(({ size }) => size))];

  const [dough, setDough] = useState(initialDough);
  const [size, setSize] = useState(initialSize);
  const [price, setPrice] = useState(initialPrice);

  return (
    <div className="card">
      <img className="card_image" src={pizzaImage} alt="pizza" />
      <h3 className="card_title">{pizza.name}</h3>
      <div className="card_filters">
        <div className="filters_size">
          {doughTypes.map((item, index) => {
            return (
              <button key={index} className="filters_button">
                {item}
              </button>
            );
          })}
        </div>
        <div className="filters_size">
          {sizeTypes.map((item, index) => {
            return (
              <button key={index} className="filters_button">
                {item}см
              </button>
            );
          })}
        </div>
      </div>
      <div className="card_footer">
        <p className="card_price">от 395р</p>
        <button className="card_add">
          <p>+</p>
          <p>Добавить</p>
        </button>
      </div>
    </div>
  );
};

export default Card;
