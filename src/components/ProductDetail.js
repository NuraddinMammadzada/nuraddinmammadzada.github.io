import React, { useState, useEffect } from "react";
import "./styles/ProductDetail.css";

function ProductDetail() {
  const [productData, setProductData] = useState(null);
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    const fetchProductData = async () => {
      try {
        const response = await fetch("/data/products.json");
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setProductData(data[0]); // Assuming you want to show the first product for now
      } catch (error) {
        console.error("There was an error fetching the product data:", error);

      }
    };

    fetchProductData();
  }, []);

  const handleQuantityChange = (e) => {
    setQuantity(parseInt(e.target.value, 10));
  };

      if (!productData) {
        return <div>Loading...</div>; // Loading state while data is fetched
      }

  return (
    <div className="product-detail">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <img
              src={productData.image}
              alt={productData.name}
              className="img-fluid"
            />
          </div>
          <div className="col-md-6">
            
            <h1>{productData.name}</h1>
            <div className="rating">
              {[...Array(Math.floor(productData.rating))].map((_, index) => (
                <i key={index} className="fas fa-star"></i>
              ))}
              {productData.rating % 1 !== 0 && (
                <i className="fas fa-star-half-alt"></i>
              )}
            </div>
            <p className="price">Rs. {productData.price.toLocaleString()}</p>
            <p className="description">{productData.description}</p>
            <div className="options">
              <div className="size">
                <label htmlFor="size">Size:</label>
                <select id="size">
                  {productData.sizes.map((size, index) => (
                    <option key={index} value={size}>
                      {size}
                    </option>
                  ))}
                </select>
              </div>
              <div className="color">
                <label htmlFor="color">Color:</label>
                <div className="color-options">
                  {productData.colors.map((color, index) => (
                    <input
                      key={index}
                      type="radio"
                      name="color"
                      value={color}
                      style={{ backgroundColor: color }}
                    />
                  ))}
                </div>
              </div>
              <div className="quantity">
                <label htmlFor="quantity">Quantity:</label>
                <input
                  type="number"
                  id="quantity"
                  value={quantity}
                  onChange={handleQuantityChange}
                />
              </div>
            </div>

            <div className="buttons">
              <button className="btn btn-primary">Add to Cart</button>
              <button className="btn btn-secondary">Compare</button>
            </div>

            <div className="details">
              <p>SKU: {productData.sku}</p>
              <p>Category: {productData.category}</p>
              <p>Tags: {productData.tags.join(", ")}</p>
              <div className="social-media">
                <a href="#" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-facebook"></i>
                </a>
                <a href="#" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-linkedin"></i>
                </a>
                <a href="#" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-twitter"></i>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Related Products Section */}
        <div className="row mt-5">
          <div className="col-md-12">
            <h2>Related Products</h2>
            <div className="row">
              {productData.relatedProducts.map((relatedProduct, index) => (
                <div key={index} className="col-md-3">
                  <div className="product">
                    <img
                      src={relatedProduct.image}
                      alt={relatedProduct.name}
                      className="img-fluid"
                    />
                    <div className="product-info">
                      <h3>{relatedProduct.name}</h3>
                      <p>{relatedProduct.description || "Stylish product"}</p>
                      <p className="price">Rs. {relatedProduct.price.toLocaleString()}</p>
                      {relatedProduct.originalPrice && (
                        <p className="original-price">
                          
                          Rs. {relatedProduct.originalPrice.toLocaleString()}
                        </p>
                      )}
                      {relatedProduct.discount && (
                        <span className="discount">{relatedProduct.discount}</span>)}
                      {relatedProduct.isNew && <span className="new">New</span>}
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <button className="btn btn-primary mt-3" >Show More</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;
