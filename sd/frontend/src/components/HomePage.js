import React from 'react';
import { Link } from 'react-router-dom';
import './styles/HomePage.css';
import img1 from './image.png';
import RoomInspiration from './RoomInspiration';

import ProductGrid from './Sect3';
import BrowseRangeSection from './BrowseRangeSection';
const HomePage = () => {
    return (
        <>
        <BrowseRangeSection />
      
      
            <section class="new-arrival-section">
                <div className="image-container">
                    <img src={img1} alt="New Collection" />
                </div>
                <div class="content-container">
                    <h5>New Arrival</h5>
                    <h1>Discover Our New Collection</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.</p>
                    <button class="buy-now-btn">BUY NOW</button>
                </div>

            </section>
            <RoomInspiration />
            <ProductGrid />
        
        </>
    );
};

export default HomePage;
