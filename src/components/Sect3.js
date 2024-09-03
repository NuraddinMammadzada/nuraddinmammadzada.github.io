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
      name: 'Product 1',
      description: 'Stylish cafe chair',
      price: 250,
      originalPrice: 350,
      discount: '-30%',
      image: 'https://www.pandasecurity.com/en/mediacenter/src/uploads/2013/11/pandasecurity-facebook-photo-privacy.jpg',
    },
    {
      id: 2,
      name: 'Product 2 ',
      description: 'Stylish cafe chair',
      price: 250,
      image: 'https://www.pandasecurity.com/en/mediacenter/src/uploads/2013/11/pandasecurity-facebook-photo-privacy.jpg',
    },
    {
      id: 3,
      name: 'Product 3',
      description: 'Luxury big sofa',
      price: 700,
      originalPrice: 1400,
      discount: '-50%',
      image: 'https://www.pandasecurity.com/en/mediacenter/src/uploads/2013/11/pandasecurity-facebook-photo-privacy.jpg',
    },
    {
      id: 4,
      name: 'Product 4',
      description: 'Outdoor bar table and stool',
      price: 50,
      isNew: true,
      image: 'https://www.pandasecurity.com/en/mediacenter/src/uploads/2013/11/pandasecurity-facebook-photo-privacy.jpg',
    },
    {
      id: 5,
      name: 'Product 5',
      description: 'Night lamp',
      price: 150,
      image: 'https://www.pandasecurity.com/en/mediacenter/src/uploads/2013/11/pandasecurity-facebook-photo-privacy.jpg',
    },
    {
      id: 6,
      name: 'Product 6',
      description: 'Small mug',
      price: 15,
      isNew: true,
      image: 'https://www.pandasecurity.com/en/mediacenter/src/uploads/2013/11/pandasecurity-facebook-photo-privacy.jpg',
    },
    {
      id: 7,
      name: 'Product 7',
      description: 'Cute bed set',
      price: 700,
      originalPrice: 1400,
      discount: '-50%',
      image: 'https://www.pandasecurity.com/en/mediacenter/src/uploads/2013/11/pandasecurity-facebook-photo-privacy.jpg',
    },
    {
      id: 8,
      name: 'Product 8',
      description: 'Minimalist flower pot',
      price: 50,
      isNew: true,
      image: 'https://www.pandasecurity.com/en/mediacenter/src/uploads/2013/11/pandasecurity-facebook-photo-privacy.jpg',
    },
  ];

  return (
    <div className="product-grid">
      {products.map((product) => (
        <div key={product.id} className="product-card">
          <div className="image-wrapper">
            {product.discount && <div className="discount-badge">{product.discount}</div>}
            {product.isNew && <div className="new-badge">Yeni</div>}
            <img src={product.image} alt={product.name} />
            <button className="add-to-cart"><i class="fa-solid fa-cart-shopping"></i>Səbətə-Əlavə et</button>
            <div className="card-actions1">
              <button><i class="fa-solid fa-share-nodes"></i>Paylaş</button>
              {/* <button><i class="fa-solid fa-arrow-right-arrow-left"></i>Compare</button> */}
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
      <button onClick={handleButtonClick}>Daha çox </button>
      </div>
    </div>
  );
};

export default ProductGrid;
