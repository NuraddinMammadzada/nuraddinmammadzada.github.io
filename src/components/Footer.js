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
                        <h3>Linklər</h3>
                        <ul>
                            <li>Ana səifə</li>
                            <li>Magaza</li>
                            <li>Haqqımızda</li>
                            <li>Əlaqə</li>

                        </ul>
                    </div>
                    <div className="footer-column">
                        <h3>Help</h3>
                        <ul>
                            <li>Ödəniş Seçimləri</li>
                            <li>Qaytarışlar</li>
                            <li>Məxfilik Siyasətləri</li>
                        </ul>
                    </div>
                  
                </div>
            </div>
            <div className="footer-bottom">
                <p>&copy; 2024 SIZE.mmc Bütün hüquqlar qorunur</p>
            </div>
        </footer>
    );
};

export default Footer;
