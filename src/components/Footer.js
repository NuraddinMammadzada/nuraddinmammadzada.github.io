import React from 'react';
import './styles/Footer.css'; // Import the CSS file

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-section">
                    <h2>SIZE.mmc</h2>
                    <p>All rights reserved</p>
                </div>
                <div className="footer-links">
                    <div className="footer-column">
                        <h3>Links</h3>
                        <ul>
                            <li>Home</li>
                            <li>Shop</li>
                            <li>About</li>
                            <li>Contact</li>
                        </ul>
                    </div>
                    <div className="footer-column">
                        <h3>Help</h3>
                        <ul>
                            <li>Payment Options</li>
                            <li>Returns</li>
                            <li>Privacy Policies</li>
                        </ul>
                    </div>
                  
                </div>
            </div>
            <div className="footer-bottom">
                <p>&copy; 2024 SIZE. All rights reserved</p>
            </div>
        </footer>
    );
};

export default Footer;
