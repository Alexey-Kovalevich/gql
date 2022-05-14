import { createStorage, getStorage } from './storage';

const storageKey = 'gql';
const store = createStorage(storageKey);
export const storage = getStorage(storageKey);

const updateCart = (cart) => {
  store(cart);
};

export const addToCart = (cart) => {
  const prevCartState = storage ? storage : [];
  const nextCartState = [...prevCartState, cart];
  updateCart(nextCartState);

  // dough: 'тонкое';
  // id: 'b89387ce-efba-4a06-b716-40bb0057e15b';
  // name: 'Карбонара';
  // price: 14.99;
  // size: 26;
};
