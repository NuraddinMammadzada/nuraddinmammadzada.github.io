import React, { useState } from 'react';
import './styles/SearchBar.css';

const SearchBar = ({ products, onSearchResults }) => {
    const [searchTerm, setSearchTerm] = useState('');

    const handleSearch = () => {
        const results = products.filter(product =>
            product.name.toLowerCase().includes(searchTerm.toLowerCase())
        );
        onSearchResults(results);
    };

    return (
        <div className="search-bar">
            <input
                type="text"
                placeholder="Search products..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
            />
            <button onClick={handleSearch}>Search</button>
        </div>
    );
};

export default SearchBar;
