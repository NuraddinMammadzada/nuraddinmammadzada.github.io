import React from 'react';
import diningImage from './img/WhatsApp Image 2024-08-23 at 15.56.25_6736c81a.jpg';
import livingImage from './img/9T9A9315-2[1].jpg';

import bedroomImage from './img/og_TP.jpg';
import "./styles/brs.css"

const BrowseRangeSection = () => {
    return (
        <section className="browse-range-section">
            <h2>Kateqoriyalarımız</h2>

            <div className="range-grid">
                <div className="range-item">
                    <img src={diningImage} alt="Dining" />
                    <h3>Qab-qacaq</h3>
                </div>
                <div className="range-item">
                    <img src={livingImage} alt="Living" />
                    <h3>Geyim</h3>
                </div>
                <div className="range-item">
                    <img src={bedroomImage} alt="Bedroom" />
                    <h3>Textil</h3>
                </div>
            </div>
        </section>
    );
};

export default BrowseRangeSection;
