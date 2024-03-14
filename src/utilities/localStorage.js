const getStoredCart = () => {
  const storedCartString = localStorage.getItem('cart');
  if (storedCartString) {
    return JSON.parse(storedCartString);
  }
  return [];
};

const addToLocalStorage = (id) => {
  const cart = getStoredCart();
  cart.push(id);
  localStorage.setItem('cart', JSON.stringify(cart));
};

const removeFromLocalStorage = (id) => {
  const cart = getStoredCart();
  const indexToBeRemoved = cart.indexOf(id);
  cart.splice(indexToBeRemoved, 1);
  localStorage.setItem('cart', JSON.stringify(cart));
};

export { addToLocalStorage, getStoredCart, removeFromLocalStorage };
