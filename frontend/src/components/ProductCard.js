import React from 'react';

const ProductCard = ({ product }) => {
  return (
    <div className="product-card">
      <img src={product.image} alt={product.name} />
      <h3>{product.name}</h3>
      <p>{product.description}</p>
      <div className="price">
        <span>{product.price}</span>
        {product.discount && <span className="discount">{product.originalPrice}</span>}
      </div>
      <button>Add to cart</button>
    </div>
  );
};

export default ProductCard;
