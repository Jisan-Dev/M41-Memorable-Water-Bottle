import React from 'react';
import './cart.css';

const Cart = ({ cart, handleRemoveFromCart }) => {
  return (
    <div>
      <button style={{ marginBottom: '15px' }}>Cart: {cart.length}</button>
      <div className="cart-container">
        {cart.map((bottle, i) => (
          <div className="item" key={i}>
            <img width="100px" src={bottle.img} />
            <button style={{ display: 'block' }} onClick={() => handleRemoveFromCart(bottle.id)}>
              Remove
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cart;
