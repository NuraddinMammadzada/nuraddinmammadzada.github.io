import React from 'react';
import { useNavigate } from 'react-router-dom';
import './styles/ProductGrid.css';

const ProductGrid = () => {
  const navigate = useNavigate();

  const handleButtonClick = () => {
      navigate('/shop');
  };
  const products = [
    {
      id: 1,
      name: 'Syltherine',
      description: 'Stylish cafe chair',
      price: 250,
      originalPrice: 350,
      discount: '-30%',
      image: 'https://via.placeholder.com/300',
    },
    {
      id: 2,
      name: 'Leviosa',
      description: 'Stylish cafe chair',
      price: 250,
      image: 'https://via.placeholder.com/300',
    },
    {
      id: 3,
      name: 'Lolito',
      description: 'Luxury big sofa',
      price: 700,
      originalPrice: 1400,
      discount: '-50%',
      image: 'https://via.placeholder.com/300',
    },
    {
      id: 4,
      name: 'Respira',
      description: 'Outdoor bar table and stool',
      price: 50,
      isNew: true,
      image: 'https://via.placeholder.com/300',
    },
    {
      id: 5,
      name: 'Grifo',
      description: 'Night lamp',
      price: 150,
      image: 'https://via.placeholder.com/300',
    },
    {
      id: 6,
      name: 'Muggo',
      description: 'Small mug',
      price: 15,
      isNew: true,
      image: 'https://via.placeholder.com/300',
    },
    {
      id: 7,
      name: 'Pingky',
      description: 'Cute bed set',
      price: 700,
      originalPrice: 1400,
      discount: '-50%',
      image: 'https://via.placeholder.com/300',
    },
    {
      id: 8,
      name: 'Potty',
      description: 'Minimalist flower pot',
      price: 50,
      isNew: true,
      image: 'https://via.placeholder.com/300',
    },
  ];

  return (
    <div className="product-grid">
      {products.map((product) => (
        <div key={product.id} className="product-card">
          <div className="image-wrapper">
            {product.discount && <div className="discount-badge">{product.discount}</div>}
            {product.isNew && <div className="new-badge">New</div>}
            <img src={product.image} alt={product.name} />
            <button className="add-to-cart"><i class="fa-solid fa-cart-shopping"></i>Add to cart</button>
            <div className="card-actions1">
              <button><i class="fa-solid fa-share-nodes"></i>Share</button>
              <button><i class="fa-solid fa-arrow-right-arrow-left"></i>Compare</button>
              {/* <button><i class="fa-solid fa-heart"></i>Like</button> */}
            </div>
          </div>
          <h3>{product.name}</h3>
          <p>{product.description}</p>
          <p className="price">
            ${product.price.toFixed(2)}
            {product.originalPrice && (
              <span className="original-price">
                ${product.originalPrice.toFixed(2)}
              </span>
            )}
          </p>
        </div>
      ))}
      <div className="show-more">
      <button onClick={handleButtonClick}>Show More</button>
      </div>
    </div>
  );
};

export default ProductGrid;
