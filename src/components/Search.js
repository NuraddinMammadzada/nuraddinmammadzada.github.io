import React, { useState } from 'react';
import "./styles/Search.css"

const SearchPage = () => {
    const [query, setQuery] = useState('');

    const handleSearch = (e) => {
        e.preventDefault();
        // Implement search logic here
        console.log('Searching for:', query);
    };

    return (
        <div className="search-page">
            <div className="logo-container">
                <h1>Search Products</h1>
            </div>
            <form className="search-form" onSubmit={handleSearch}>
                <input
                    type="text"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder="Search for products..."
                />
                <button type="submit">Search</button>
            </form>
        </div>
    );
};

export default SearchPage;
