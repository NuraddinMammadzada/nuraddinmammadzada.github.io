import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './styles/ProductDetail.css';

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);
  const [relatedProducts, setRelatedProducts] = useState([]);
  const [quantity, setQuantity] = useState(1); // State for quantity

  useEffect(() => {
    const products = JSON.parse(localStorage.getItem('products'));
    const selectedProduct = products.find((item) => item.id === parseInt(id));
    setProduct(selectedProduct);

    const otherProducts = products.filter((item) => item.id !== parseInt(id));
    setRelatedProducts(otherProducts.slice(0, 4));
  }, [id]);

  if (!product) {
    return <div>Loading...</div>;
  }

  const handleProductClick = (productId) => {
    navigate(`/product/${productId}`);
  };

  const handleAddToCart = () => {
    const cartItems = JSON.parse(localStorage.getItem('cart')) || [];
    const existingItem = cartItems.find((item) => item.id === product.id);
  
    if (existingItem) {
      existingItem.quantity += quantity;
    } else {
      cartItems.push({ ...product, quantity });
    }
  
    localStorage.setItem('cart', JSON.stringify(cartItems));
    navigate('/cart'); // Redirect to the cart page
  };
  

  return (
    <div className="product-detail-page">
      <div className="breadcrumbs">
        <span>Home</span> &gt; <span>Shop</span> &gt; <span>{product.name}</span>
      </div>

      <div className="product-detail-container">
        <div className="product-images">
          <img src={product.image} alt={product.name} className="main-image" />
          <div className="thumbnail-gallery">
            <img src={product.image} alt={product.name} />
            <img src={product.image} alt={product.name} />
            <img src={product.image} alt={product.name} />
            <img src={product.image} alt={product.name} />
          </div>
        </div>

        <div className="product-details">
          <h1>{product.name}</h1>
          <p className="price">{product.price}</p>
          <div className="ratings">
            ⭐⭐⭐⭐⭐ <span>5 Customer Reviews</span>
          </div>
          <p className="description">
            Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound.
          </p>

          <div className="options">
            <div className="size">
              <label>Size:</label>
              <button>L</button>
              <button>XL</button>
              <button>XS</button>
            </div>

            <div className="color">
              <label>Color:</label>
              <button className="color-option" style={{ backgroundColor: 'black' }}></button>
              <button className="color-option" style={{ backgroundColor: 'purple' }}></button>
              <button className="color-option" style={{ backgroundColor: 'gold' }}></button>
            </div>
          </div>

          <div className="quantity">
            <label>Quantity:</label>
            <input 
              type="number" 
              value={quantity} 
              onChange={(e) => setQuantity(parseInt(e.target.value))}
              min="1" 
            />
          </div>

          <div className="actions">
            <button className="compare" onClick={handleAddToCart}>Add to Cart</button>
          </div>

          <div className="product-info">
            <p><strong>SKU:</strong> SS001</p>
            <p><strong>Category:</strong> Sofas</p>
            <p><strong>Tags:</strong> Sofa, Chair, Home, Shop</p>
            <p><strong>Share:</strong> <a href="#">Facebook</a> <a href="#">LinkedIn</a> <a href="#">Twitter</a></p>
          </div>
        </div>
      </div>

      <div className="related-products">
        <h2>Related Products</h2>
        <div className="related-products-grid">
          {relatedProducts.map((relatedProduct) => (
            <div
              key={relatedProduct.id}
              className="related-product-card"
              onClick={() => handleProductClick(relatedProduct.id)}
            >
              <img src={relatedProduct.image} alt={relatedProduct.name} />
              <h3>{relatedProduct.name}</h3>
              <p className="price">${parseFloat(relatedProduct.price.replace('$', '')).toFixed(2)}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
