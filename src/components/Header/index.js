import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/images/logo.svg';
import cart from '../../assets/images/shop.svg';
import './styles.scss';

const Header = () => {
  return (
    <header className="header">
      <Link to="/" className="logo">
        <img className="logo_icon" src={logo} alt="logo" />
        <div className="logo_titles">
          <h1 className="logo_h1">React pizza</h1>
          <p className="logo_p">лучшая пицца во вселенной</p>
        </div>
      </Link>
      <Link to="/orders">Заказы</Link>
      <Link to="/cart" className="header_cart">
        <img src={cart} alt="cart" />
      </Link>
    </header>
  );
};

export default Header;
