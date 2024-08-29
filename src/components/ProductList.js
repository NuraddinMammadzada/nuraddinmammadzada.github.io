// src/components/ProductList.js
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './ProductList.css';

const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const storedProducts = JSON.parse(localStorage.getItem('products'));
    setProducts(storedProducts || []);
  }, []);

  return (
    <div className="product-grid">
      {products.map(product => (
        <div key={product.id} className="product-item">
          <Link to={`/product/${product.id}`}>
            <img src={product.image} alt={product.name} />
            <h2>{product.name}</h2>
            <p>Rp {product.price.toLocaleString()}</p>
            {product.oldPrice && (
              <p>
                <s>Rp {product.oldPrice.toLocaleString()}</s> - {product.discount} OFF
              </p>
            )}
          </Link>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
