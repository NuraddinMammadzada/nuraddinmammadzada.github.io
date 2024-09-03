import React, { useState } from 'react';
import "./styles/Search.css";

const SearchPage = () => {
    const [query, setQuery] = useState('');
    const [results, setResults] = useState([]);

    const handleSearch = (e) => {
        e.preventDefault();
        if (query.trim() === '') {
            setResults([]); // Clear results if the query is empty
            return; // Exit the function early if the query is empty
        }

        const products = JSON.parse(localStorage.getItem('products')) || [];
        const filteredProducts = products.filter(product =>
            product.name.toLowerCase().includes(query.toLowerCase())
        );
        setResults(filteredProducts);
    };

    return (
        <div className="search-page">
            <div className="overlay">
                <div className="logo-container">
                    <h1>Axtarış</h1>
                </div>
                <form className="search-form" onSubmit={handleSearch}>
                    <input
                        type="text"
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                        placeholder="Search for products..."
                    />
                    <button type="submit">Axtar</button>
                </form>
                <div className="search-results">
                    {results.length > 0 ? (
                        results.map(product => (
                            <div 
                                key={product.id} 
                                className="product-item"
                                onClick={() => window.location.href = `/productdetail/${product.id}`}
                            >
                                {product.name}
                            </div>
                        ))
                    ) : (
                        query.trim() !== '' && <div className="no-results">Tapılmadı</div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default SearchPage;
