import React from 'react';
import EmptyCart from '../EmptyCart';
import CartItems from '../../components/CartItems';
import CartInfo from '../../components/CartInfo';
import CartButtons from '../../components/CartButtons';
import './styles.scss';

const Cart = () => {
  return (
    <EmptyCart />
    // <div className="cart">
    //   <div className="cart_top">
    //     <h1 className="top-title">Корзина</h1>
    //     <button className="top-button">Очистить корзину</button>
    //   </div>
    //   <CartItems />
    //   <CartInfo />
    //   <CartButtons />
    // </div>
  );
};

export default Cart;
