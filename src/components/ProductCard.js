import React from 'react';


const ProductCard = ({ product }) => {
  return (
    <div className="product-card">
      <img src={product.image} alt={product.name} />
      <div className="product-info">
        <h3>{product.name}</h3>
        <p>{product.description}</p>
        <div className="product-price">
          <span className="discounted-price">{product.price}</span>
          {product.originalPrice && (
            <span className="original-price">{product.originalPrice}</span>
          )}
        </div>
      </div>
      <div className="product-overlay">
        <button>Add to cart</button>
        <button>Compare</button>
        <button>Like</button>
      </div>
    </div>
  );
};

export default ProductCard;
