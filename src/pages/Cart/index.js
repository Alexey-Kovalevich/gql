import React from 'react';
import { useMutation } from '@apollo/client';
import { CREATE_ORDER } from '../../gql/createOrder';
import { storage } from '../../helpers/cart';
import EmptyCart from '../EmptyCart';
import CartItems from '../../components/CartItems';
import CartInfo from '../../components/CartInfo';
import CartButtons from '../../components/CartButtons';
import './styles.scss';

const Cart = () => {
  const totalPrice = storage.reduce((acc, item) => acc + item.price, 0);
  const totalAmount = storage.length;

  const [createOrder, { error, loading, data }] = useMutation(CREATE_ORDER, {
    onCompleted: () => {
      window.location = '/';
    },
  });

  if (loading) {
    return 'Loading...';
  }

  if (error) {
    return 'Error!';
  }

  console.log(data);

  return (
    <>
      {storage ? (
        <div className="cart">
          <div className="cart_top">
            <h1 className="top-title">Корзина</h1>
            <button className="top-button">Очистить корзину</button>
          </div>
          <CartItems storage={storage} />
          <CartInfo totalPrice={totalPrice} totalAmount={totalAmount} />
          <CartButtons
            storage={storage}
            totalPrice={totalPrice}
            totalAmount={totalAmount}
            createOrder={createOrder}
          />
        </div>
      ) : (
        <EmptyCart />
      )}
    </>
  );
};

export default Cart;
