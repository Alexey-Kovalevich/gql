import { makeVar } from '@apollo/client';
import { createStorage, getStorage } from './storage';

export const storageKey = 'gql';
const store = createStorage(storageKey);

export const cartVar = makeVar(getStorage(storageKey) || []);

const updateCart = (cart) => {
  cartVar(cart);
  store(cart);
};

export const increaseItemAmount = (cart, store) => {
  const prevCartState = cartVar();
  const nextCartState = prevCartState.map((item) =>
    item.id === cart.id ? { ...item, quantity: item.quantity + 1 } : item
  );
  updateCart(nextCartState);
};

export const clearCart = () => {
  updateCart([]);
};

export const removeFromCart = (id, dough, size) => {
  const prevCartState = cartVar();
  const nextCartState = prevCartState.filter(
    (item) => item.id !== id || item.dough !== dough || item.size !== size
  );
  updateCart(nextCartState);
};

export const addToCart = (cart) => {
  const prevCartState = cartVar();
  const inStorage = prevCartState.find((item) => {
    return (
      item.id === cart.id &&
      item.dough === cart.dough &&
      item.size === cart.size
    );
  });

  if (inStorage) {
    increaseItemAmount(cart, prevCartState);
  } else {
    const nextCartState = [...prevCartState, { ...cart, quantity: 1 }];
    updateCart(nextCartState);
  }
};
