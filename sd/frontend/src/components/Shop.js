import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import productsData from '../data/products.json';
import './styles/ProductCard.css';

const Shop = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 12;
  const totalPages = Math.ceil(productsData.length / productsPerPage);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const currentProducts = productsData.slice(
    (currentPage - 1) * productsPerPage,
    currentPage * productsPerPage
  );

  return (
    <div className="shop">
      <header className="shop-header">
        <h1>Shop</h1>
        <nav>
          <a href="/">Home</a> / <span>Shop</span>
        </nav>
      </header>

      <div className="product-grid">
        {currentProducts.map((product) => (
          <Link to={`/product/${product.id}`} key={product.id} className="product-card">
            <div className="image-container">
              <img src={product.image} alt={product.name} />
              {product.discount && <span className="badge">-{product.discount}%</span>}
            </div>
            <h3>{product.name}</h3>
            <p className="description">{product.description}</p>
            <div className="price">
              <span>{product.price}</span>
              {product.originalPrice && (
                <span className="original-price">{product.originalPrice}</span>
              )}
            </div>
            <button className="add-to-cart">Add to cart</button>
          </Link>
        ))}
      </div>

      <div className="pagination">
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
        >
          Previous
        </button>
        {[...Array(totalPages)].map((_, index) => (
          <button
            key={index}
            onClick={() => handlePageChange(index + 1)}
            className={currentPage === index + 1 ? 'active' : ''}
          >
            {index + 1}
          </button>
        ))}
        <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Shop;
