import React, { useState, useEffect } from 'react';
import './styles/CartPage.css'; // Link to your CSS file

const CartPage = () => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    setCartItems(cart);
  }, []);

  const handleRemoveItem = (id) => {
    const updatedCart = cartItems.filter((item) => item.id !== id);
    setCartItems(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
  };

  const handleQuantityChange = (id, quantity) => {
    const updatedCart = cartItems.map((item) => 
      item.id === id ? { ...item, quantity: parseInt(quantity) } : item
    );
    setCartItems(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
  };

  const incrementQuantity = (id) => {
    const updatedCart = cartItems.map((item) =>
      item.id === id ? { ...item, quantity: item.quantity + 1 } : item
    );
    setCartItems(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
  };

  const decrementQuantity = (id) => {
    const updatedCart = cartItems.map((item) =>
      item.id === id && item.quantity > 1 ? { ...item, quantity: item.quantity - 1 } : item
    );
    setCartItems(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
  };

  const getTotalPrice = () => {
    return cartItems.reduce((total, item) => total + (parseFloat(item.price) * item.quantity), 0).toFixed(2);
  };

  return (
    <div className="cart-page">
      <div className="cart-header">
        <h1>Cart</h1>
        <p>Home &gt; Cart</p>
      </div>
      
      <div className="cart-content">
        {cartItems.length === 0 ? (
          <div className="empty-cart-message">
            <p>Your cart is empty. Browse our products and find something you like!</p>
            <button className="continue-shopping-button" onClick={() => window.location.href = '/shop'}>
              Continue Shopping
            </button>
          </div>
        ) : (
          <>
            <div className="cart-items">
              {cartItems.map((item) => (
                <div key={item.id} className="cart-item">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="cart-item-image"
                  />
                  <div className="cart-item-details">
                    <div className="cart-item-info">
                      <p className="cart-item-name">{item.name}</p>
                      <p className="cart-item-price">$ {parseFloat(item.price).toFixed(2)}</p>
                    </div>
                    <div className="quantity-controls">
                      <button className="quantity-decrease" onClick={() => decrementQuantity(item.id)}>-</button>
                      <input 
                        type="number" 
                        value={item.quantity} 
                        className="cart-item-quantity" 
                        onChange={(e) => handleQuantityChange(item.id, e.target.value)} 
                        min="1"
                      />
                      <button className="quantity-increase" onClick={() => incrementQuantity(item.id)}>+</button>
                    </div>
                    <p className="cart-item-subtotal">$ {(parseFloat(item.price) * item.quantity).toFixed(2)}</p>
                    <button className="cart-item-remove" onClick={() => handleRemoveItem(item.id)}>🗑</button>
                  </div>
                </div>
              ))}
            </div>

            <div className="cart-totals">
              <p className="subtotal">
                Subtotal: <span>$ {getTotalPrice()}</span>
              </p>
              <p className="total">
                Total: <span>$ {getTotalPrice()}</span>
              </p>
              <button className="checkout-button">Check Out</button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default CartPage;
