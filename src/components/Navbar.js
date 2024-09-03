import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './styles/Navbar.css';

const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    const closeMobileMenu = () => {
        setIsMobileMenuOpen(false);
    };

    return (
        <nav className="navbar">
            <div className="navbar-logo">
                <Link to="/">
                    <span>SIZE</span>
                </Link>
            </div>
            <div className="navbar-menu-icon" onClick={toggleMobileMenu}>
                <i className="fa-solid fa-bars"></i> {/* Hamburger icon */}
            </div>
            <ul className={`navbar-links ${isMobileMenuOpen ? 'active' : ''}`}>
                <li><Link to="/shop">Mağaza</Link></li>
                <li><Link to="/about">Haqqımızda</Link></li>
                <li><Link to="/contact">Əlaqə</Link></li>
                <ul className='none'>
                    <li><Link to="/login"><i className="fa-solid fa-user"></i></Link></li>
                    <li><Link to="/search"><i className="fa-solid fa-magnifying-glass"></i></Link></li>
                    <li> <Link to="/cart"><i className="fa-solid fa-cart-shopping"></i></Link></li>
                </ul>
                <div className="navbar-close-button" onClick={closeMobileMenu}>
                    <i className="fa-solid fa-times"></i> {/* Close icon */}
                </div>
            </ul>
            <div className="navbar-icons">
                <Link to="/login"><i className="fa-solid fa-user"></i></Link>
                <Link to="/search"><i className="fa-solid fa-magnifying-glass"></i></Link>
                <Link to="/cart"><i className="fa-solid fa-cart-shopping"></i></Link>
            </div>
        </nav>
    );
};

export default Navbar;
