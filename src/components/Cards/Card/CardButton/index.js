import React from 'react';
import classNames from 'classnames';
import './styles.scss';

const CardButton = ({ value, param, measure, clickHandler }) => {
  return (
    <button
      className={classNames({
        filters_button: true,
        filters_button_active: value === param,
      })}
      onClick={clickHandler}
    >
      {value}
      {measure && `${measure}`}
    </button>
  );
};

export default CardButton;
