import { useEffect } from 'react';
import { useState } from 'react';
import Bottle from '../bottle';
import './bottles.css';
import { addToLocalStorage, getStoredCart } from '../../utilities/localStorage';

const Bottles = () => {
  const [bottles, setBottles] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    fetch('https://raw.githubusercontent.com/ProgrammingHero1/memorable-water-bottle/main/public/bottles.json')
      .then((res) => res.json())
      .then((data) => setBottles(data));
  }, []);

  useEffect(() => {
    console.log('bottles length inside useEffect', bottles.length);
    if (bottles.length) {
      const storedCartIds = getStoredCart();
      console.log(storedCartIds);
      const savedCart = [];
      for (const id of storedCartIds) {
        const cartBottle = bottles.find((bottle) => bottle.id === id);
        if (cartBottle) {
          savedCart.push(cartBottle);
        }
      }
      setCart(savedCart);
    }
  }, [bottles]);

  const handleAddToCart = (bottle) => {
    setCart([...cart, bottle]);
    addToLocalStorage(bottle.id);
  };

  return (
    <div>
      <h2>Available Bottles: {bottles.length} </h2>
      <button style={{ marginBottom: '15px' }}>Cart: {cart.length}</button>
      <div className="bottle-container">
        {bottles.map((bottle) => (
          <Bottle key={bottle.id} bottle={bottle} handleAddToCart={handleAddToCart} />
        ))}
      </div>
    </div>
  );
};

export default Bottles;
