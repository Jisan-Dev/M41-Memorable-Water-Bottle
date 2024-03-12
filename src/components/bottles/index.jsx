import { useEffect } from 'react';
import { useState } from 'react';
import Bottle from '../bottle';
import './bottles.css';

const Bottles = () => {
  const [bottles, setBottles] = useState([]);

  useEffect(() => {
    fetch('https://raw.githubusercontent.com/ProgrammingHero1/memorable-water-bottle/main/public/bottles.json')
      .then((res) => res.json())
      .then((data) => setBottles(data));
  }, []);

  return (
    <div>
      <h2>Available Bottles: {bottles.length} </h2>
      <div className="bottle-container">
        {bottles.map((bottle) => (
          <Bottle key={bottle.id} bottle={bottle} />
        ))}
      </div>
    </div>
  );
};

export default Bottles;
