import { useEffect } from 'react';
import { useQuery } from '@apollo/client';
import React from 'react';
import { Link } from 'react-router-dom';
import { useReactiveVar } from '@apollo/client';
import { cartVar } from '../../helpers/cart';
import { GET_AMOUNT } from '../../gql/getAmount';
import { SUBSCRIPTION_AMOUNT } from '../../gql/subscriptionAmount';
import logo from '../../assets/images/logo.svg';
import cartLogo from '../../assets/images/shop.svg';
import './styles.scss';

const Header = () => {
  const { data, loading, subscribeToMore } = useQuery(GET_AMOUNT);

  useEffect(() => {
    subscribeToMore({
      document: SUBSCRIPTION_AMOUNT,
      updateQuery: (prev, { subscriptionData }) => {
        if (!subscriptionData.data) {
          return prev;
        }
        const newAmount = subscriptionData?.data?.amountUpdated;
        return { ...prev, amount: newAmount };
      },
    });
  }, [subscribeToMore]);

  const cart = useReactiveVar(cartVar);

  const totalPrice =
    Math.round(
      cart.reduce((acc, item) => acc + item.price * item.quantity, 0) * 100
    ) / 100;
  const totalAmount = cart.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <header className="header">
      <Link to="/" className="logo">
        <img className="logo_icon" src={logo} alt="logo" />
        <div className="logo_titles">
          <h1 className="logo_h1">React pizza</h1>
          <p className="logo_p">лучшая пицца во вселенной</p>
        </div>
      </Link>
      {!loading && <p>{data.amount} штук осталось</p>}
      <Link to="/orders">Заказы</Link>
      <Link to="/cart" className="header_cart">
        {totalPrice}р. <img src={cartLogo} alt="cart" /> {totalAmount}
      </Link>
    </header>
  );
};

export default Header;
