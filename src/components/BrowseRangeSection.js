import React from 'react';
import diningImage from './img/og_TP.jpg';
import livingImage from './img/asd.jpg';
import bedroomImage from './img/IMG_0057.webp';
import "./styles/brs.css"

const BrowseRangeSection = () => {
    return (
        <section className="browse-range-section">
            <h2>Browse The Range</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <div className="range-grid">
                <div className="range-item">
                    <img src={diningImage} alt="Dining" />
                    <h3>Textil</h3>
                </div>
                <div className="range-item">
                    <img src={livingImage} alt="Living" />
                    <h3>Bedroom</h3>
                </div>
                <div className="range-item">
                    <img src={bedroomImage} alt="Bedroom" />
                    <h3>Dishes</h3>
                </div>
            </div>
        </section>
    );
};

export default BrowseRangeSection;
