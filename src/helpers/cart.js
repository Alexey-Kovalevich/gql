import { createStorage, getStorage, getStore } from './storage';

export const storageKey = 'gql';
const store = createStorage(storageKey);

const updateCart = (cart) => {
  store(cart);
};

export const increaseItemAmount = (cart, store) => {
  const prevCartState = [...store];
  const nextCartState = prevCartState.map((item) =>
    item.id === cart.id ? { ...item, quantity: item.quantity + 1 } : item
  );
  updateCart(nextCartState);
};

export const clearCart = () => {
  updateCart(null);
};

export const removeFromCart = (id, dough, size) => {
  const stored = getStore(getStorage(storageKey));
  const prevCartState = [...stored];
  const nextCartState = prevCartState.filter(
    (item) => item.id !== id || item.dough !== dough || item.size !== size
  );
  updateCart(nextCartState);
};

export const addToCart = (cart) => {
  const stored = getStore(getStorage(storageKey));
  const prevCartState = [...stored];
  const inStorage = prevCartState.find(
    (item) =>
      item.id === cart.id &&
      item.dough === cart.dough &&
      item.size === cart.size
  );

  if (inStorage) {
    increaseItemAmount(cart, prevCartState);
  } else {
    const nextCartState = [...prevCartState, { ...cart, quantity: 1 }];
    updateCart(nextCartState);
  }
  // dough: 'тонкое';
  // id: 'b89387ce-efba-4a06-b716-40bb0057e15b';
  // name: 'Карбонара';
  // price: 14.99;
  // size: 26;
};
