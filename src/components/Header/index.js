import { useQuery, useSubscription } from '@apollo/client';
import React from 'react';
import { Link } from 'react-router-dom';
import { GET_AMOUNT } from '../../gql/getAmount';
import { SUBSCRIPTION_AMOUNT } from '../../gql/subscriptionAmount';
import logo from '../../assets/images/logo.svg';
import cart from '../../assets/images/shop.svg';
import './styles.scss';

const Header = () => {
  const { data, loading } = useSubscription(SUBSCRIPTION_AMOUNT);
  const { data: amountData, loading: amountLoading } = useQuery(GET_AMOUNT);

  let amount = 500;

  if (loading) {
    if (!amountLoading) {
      amount = amountData.amount;
    }
  } else {
    amount = data.amountUpdated;
  }

  console.log(amount);

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
