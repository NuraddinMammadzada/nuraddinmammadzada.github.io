import React, { useState } from 'react';
import './styles/Sidebar.css';

const Sidebar = ({ filters, setFilters }) => {
    const handleCheckboxChange = (category, value) => {
        setFilters({
            ...filters,
            [category]: filters[category].includes(value)
                ? filters[category].filter((item) => item !== value)
                : [...filters[category], value],
        });
    };

    return (
        <aside className="sidebar">
            <h3>Filters</h3>

            <div className="filter-section">
                <h4>Price</h4>
                <label>
                    <input
                        type="checkbox"
                        onChange={() => handleCheckboxChange('price', 'Under $50')}
                    />
                    Under $50
                </label>
                <label>
                    <input
                        type="checkbox"
                        onChange={() => handleCheckboxChange('price', '$50 - $100')}
                    />
                    $50 - $100
                </label>
                <label>
                    <input
                        type="checkbox"
                        onChange={() => handleCheckboxChange('price', 'Over $100')}
                    />
                    Over $100
                </label>
            </div>

            <div className="filter-section">
                <h4>Brand</h4>
                <label>
                    <input
                        type="checkbox"
                        onChange={() => handleCheckboxChange('brand', 'Brand A')}
                    />
                    Brand A
                </label>
                <label>
                    <input
                        type="checkbox"
                        onChange={() => handleCheckboxChange('brand', 'Brand B')}
                    />
                    Brand B
                </label>
                <label>
                    <input
                        type="checkbox"
                        onChange={() => handleCheckboxChange('brand', 'Brand C')}
                    />
                    Brand C
                </label>
            </div>

            <div className="filter-section">
                <h4>Color</h4>
                <label>
                    <input
                        type="checkbox"
                        onChange={() => handleCheckboxChange('color', 'Red')}
                    />
                    Red
                </label>
                <label>
                    <input
                        type="checkbox"
                        onChange={() => handleCheckboxChange('color', 'Blue')}
                    />
                    Blue
                </label>
                <label>
                    <input
                        type="checkbox"
                        onChange={() => handleCheckboxChange('color', 'Black')}
                    />
                    Black
                </label>
            </div>

            <div className="filter-section">
                <h4>Customer Review</h4>
                <label>
                    <input
                        type="checkbox"
                        onChange={() => handleCheckboxChange('reviews', '4 Stars & Up')}
                    />
                    4 Stars & Up
                </label>
                <label>
                    <input
                        type="checkbox"
                        onChange={() => handleCheckboxChange('reviews', '3 Stars & Up')}
                    />
                    3 Stars & Up
                </label>
            </div>
        </aside>
    );
};

export default Sidebar;
