import React from 'react';
import './Cart.css';

const Cart = () => {
  return (
    <button className="flex-cart">
      <i className="fas fa-shopping-cart icon"></i>
      <span className="cart-text">MY CART</span>
      <span className="cart-quant">47</span>
    </button>
  )
}

export default Cart;
