import React from 'react';
import './cart.css';

const Cart = ({ cart }) => {
  return (
    <div>
      <button style={{ marginBottom: '15px' }}>Cart: {cart.length}</button>
      <div className="cart__img-container">
        {cart.map((bottle) => (
          <img key={bottle.id} width="100px" src={bottle.img} />
        ))}
      </div>
    </div>
  );
};

export default Cart;
