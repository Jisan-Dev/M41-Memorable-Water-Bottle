import { useEffect } from 'react';
import { useState } from 'react';
import Bottle from '../bottle';
import './bottles.css';

const Bottles = () => {
  const [bottles, setBottles] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    fetch('https://raw.githubusercontent.com/ProgrammingHero1/memorable-water-bottle/main/public/bottles.json')
      .then((res) => res.json())
      .then((data) => setBottles(data));
  }, []);

  const handleAddToCart = (bottle) => {
    setCart([...cart, bottle]);
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
