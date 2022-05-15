import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { CREATE_ORDER } from '../../gql/createOrder';
import { getStorage, getStore } from '../../helpers/storage';
import { storageKey, clearCart, removeFromCart } from '../../helpers/cart';
import EmptyCart from '../EmptyCart';
import CartItems from '../../components/CartItems';
import CartInfo from '../../components/CartInfo';
import CartButtons from '../../components/CartButtons';
import './styles.scss';

const Cart = () => {
  const storage = getStore(getStorage(storageKey));
  const [choosenPizzas, setChoosenPizzas] = useState(storage || []);

  const totalPrice =
    Math.round(
      storage.reduce((acc, item) => acc + item.price * item.quantity, 0) * 100
    ) / 100;
  const totalAmount = storage.reduce((acc, item) => acc + item.quantity, 0);

  const [createOrder, { loading }] = useMutation(CREATE_ORDER, {
    onCompleted: () => {
      window.location = '/';
      handleClearCart();
    },
    onError: () => {
      console.log('error');
    },
  });

  if (loading) {
    return 'Loading...';
  }

  const removePizza = (id, dough, size) => {
    removeFromCart(id, dough, size);
    const arr = [...choosenPizzas];
    setChoosenPizzas(
      arr.filter(
        (item) => item.id !== id || item.dough !== dough || item.size !== size
      )
    );
  };

  const handleClearCart = () => {
    setChoosenPizzas([]);
    clearCart();
  };

  return (
    <>
      {choosenPizzas.length > 0 ? (
        <div className="cart">
          <div className="cart_top">
            <h1 className="top-title">Корзина</h1>
            <button className="top-button" onClick={handleClearCart}>
              Очистить корзину
            </button>
          </div>
          <CartItems storage={choosenPizzas} removePizza={removePizza} />
          <CartInfo totalPrice={totalPrice} totalAmount={totalAmount} />
          <CartButtons
            storage={choosenPizzas}
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
