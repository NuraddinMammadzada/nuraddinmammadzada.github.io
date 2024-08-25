import React from 'react';
import './styles/CartPage.css';

const CartPage = ({ cartItems, onRemove, onIncrease, onDecrease }) => {
    return (
        <div className="cart-page">
            <h2>Your Cart</h2>
            <div className="cart-items">
                {cartItems.map(item => (
                    <div key={item.id} className="cart-item">
                        <img src={item.image} alt={item.name} className="cart-item-image" />
                        <div className="cart-item-info">
                            <h3>{item.name}</h3>
                            <p>${item.price}</p>
                            <div className="cart-item-controls">
                                <button onClick={() => onDecrease(item.id)}>-</button>
                                <span>{item.quantity}</span>
                                <button onClick={() => onIncrease(item.id)}>+</button>
                            </div>
                            <button onClick={() => onRemove(item.id)} className="remove-button">Remove</button>
                        </div>
                    </div>
                ))}
            </div>
            <div className="cart-summary">
                <h3>Total: ${cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0)}</h3>
                <button className="checkout-button">Proceed to Checkout</button>
            </div>
        </div>
    );
};

export default CartPage;
