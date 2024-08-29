import React from 'react';
import { Link } from 'react-router-dom';
import './styles/Navbar.css';

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="navbar-logo">
                <Link to="/">
                    <span>SIZE</span>
                </Link>
            </div>
            <ul className="navbar-links">
                <li><Link to="/shop">Shop</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/contact">Contact</Link></li>
            </ul>
            <div className="navbar-icons">
                <Link to="/login"><i class="fa-solid fa-user"></i></Link>
                <Link to="/search"><i class="fa-solid fa-magnifying-glass"></i></Link>
                <Link to="/cart"><i class="fa-solid fa-cart-shopping"></i></Link>
            </div>
        </nav>
    );
};

export default Navbar;
