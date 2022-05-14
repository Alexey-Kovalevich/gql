export const createStorage = (key) => {
  return (value) => {
    if (value === null) {
      localStorage.removeItem(key);
      return;
    }

    if (typeof value === 'object') {
      localStorage.setItem(key, JSON.stringify(value));
      return;
    }

    localStorage.setItem(key, value);
  };
};

export const getStorage = (key) => {
  const storage = localStorage.getItem(key);
  if (storage) {
    return JSON.parse(storage);
  }
  return null;
};
