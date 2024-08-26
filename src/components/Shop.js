import React, { useState, useEffect } from 'react';
import './styles/Shop.css'; // Custom CSS file
import ProductCard from './ProductCard'; // Reusable ProductCard component

const ShopPage = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch product data from your backend (API endpoint)
    const fetchProducts = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/products');
        const data = await response.json();
        setProducts(data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching products:', error);
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) {
    return <div className="loading">Loading...</div>;
  }

  return (
    <div className="shop-page">
      <div className="shop-header">
        <h1>Shop</h1>
        <p>Home &gt; Shop</p>
      </div>

      <div className="shop-filters">
        <div className="filter-buttons">
          <button>Filter</button>
          <button>Show: 16</button>
          <button>Sort by: Default</button>
        </div>
      </div>

      <div className="product-grid">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      <div className="pagination">
        <button>1</button>
        <button>2</button>
        <button>3</button>
        <button>Next</button>
      </div>
    </div>
  );
};

export default ShopPage;
