import React from 'react';
import pizza from '../../../assets/images/pizza.png';
import './styles.scss';

const Card = () => {
  return (
    <div className="card">
      <img className="card_image" src={pizza} alt="pizza" />
      <h3 className="card_title">Чизбургер-пицца</h3>
      <div className="card_filters">
        <div className="filters_size">
          <button className="filters_button">Тонкое</button>
          <button className="filters_button">Традиционное</button>
        </div>
        <div className="filters_size">
          <button className="filters_button">26см</button>
          <button className="filters_button">30см</button>
          <button className="filters_button">40см</button>
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
