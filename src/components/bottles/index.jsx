import { useEffect } from 'react';
import { useState } from 'react';
import Bottle from '../bottle';
import './bottles.css';
import { addToLocalStorage, getStoredCart, removeFromLocalStorage } from '../../utilities/localStorage';
import Cart from '../cart';

const Bottles = () => {
  const [bottles, setBottles] = useState([]);
  const [cart, setCart] = useState([]);
  const [isRemoved, setIsRemoved] = useState(false);

  useEffect(() => {
    fetch('https://raw.githubusercontent.com/ProgrammingHero1/memorable-water-bottle/main/public/bottles.json')
      .then((res) => res.json())
      .then((data) => setBottles(data));
  }, []);

  useEffect(() => {
    if (bottles.length) {
      const storedCartIds = getStoredCart();
      const savedCart = [];
      for (const id of storedCartIds) {
        const cartBottle = bottles.find((bottle) => bottle.id === id);
        if (cartBottle) {
          savedCart.push(cartBottle);
        }
      }
      setCart(savedCart);
    }
  }, [bottles, isRemoved]);

  const handleAddToCart = (bottle) => {
    setCart([...cart, bottle]);
    addToLocalStorage(bottle.id);
  };

  const handleRemoveFromCart = (id) => {
    removeFromLocalStorage(id);
    setIsRemoved(!isRemoved);
  };

  return (
    <div>
      <h2>Available Bottles: {bottles.length} </h2>
      <Cart cart={cart} handleRemoveFromCart={handleRemoveFromCart} />
      <div className="bottle-container">
        {bottles.map((bottle) => (
          <Bottle key={bottle.id} bottle={bottle} handleAddToCart={handleAddToCart} />
        ))}
      </div>
    </div>
  );
};

export default Bottles;
