import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './styles/Shop.css';

const Shop = () => {
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const sampleProducts = [
      { id: 1, name: 'Product 1', description: 'Stylish cafe chair', price: '$10.00', image: 'https://www.homex.az/uploads/2020/06/karaca1.jpg' },
      { id: 2, name: 'Product 2', description: 'Stylish cafe chair', price: '$10.50', image: 'https://www.homex.az/uploads/2020/06/granit-qazan-desti.png' },
      { id: 3, name: 'Product 3', description: 'Stylish cafe chair', price: '$11.00', image: 'https://www.soliton.az/images/articles/2022/01/13/20220113060044889_4.jpg' },
      { id: 4, name: 'Product 4', description: 'Stylish cafe chair', price: '$11.50', image: 'https://uwaterloo.ca/news/sites/ca.news/files/styles/feature_large/public/perry-merrity-ii-gprji5r4rak-unsplash.jpg?itok=zWvhOwNY' },
      { id: 5, name: 'Product 5', description: 'Stylish cafe chair', price: '$12.00', image: 'https://harbegon.ru/upload/w_1024/5f1ac64fdd29e-textile-548716_1280.jpg' },
      { id: 6, name: 'Product 6', description: 'Stylish cafe chair', price: '$12.50', image: 'https://deltamaquinastexteis.com.br/wp-content/uploads/2023/12/industria-textil-no-brasil.jpg' },
      { id: 7, name: 'Product 7', description: 'Stylish cafe chair', price: '$13.00', image: 'https://media.telefonicatech.com/telefonicatech/uploads/2021/1/126253_Como-la-industria-textil-en-Ecuador-saca-ventaja-de-los-datos.jpg' },
      { id: 8, name: 'Product 8', description: 'Stylish cafe chair', price: '$13.50', image: 'https://emsan.com.az/uploads/products/fad840f2bef830a.jpg' },
      { id: 9, name: 'Product 9', description: 'Stylish cafe chair', price: '$14.00', image: 'https://images.pexels.com/photos/996329/pexels-photo-996329.jpeg' },
      { id: 10, name: 'Product 10', description: 'Stylish cafe chair', price: '$14.50', image: 'https://coronadotimes.com/wp-content/uploads/2022/07/best-ways-to-find-womens-plus-size-clothing.jpg' },
      { id: 11, name: 'Product 11', description: 'Stylish cafe chair', price: '$15.00', image: 'https://study.com/cimages/multimages/16/textile_designs8662834373381706224.jpg' },
      { id: 12, name: 'Product 12', description: 'Stylish cafe chair', price: '$15.50', image: 'https://textilefocus.com/wp-content/uploads/2016/11/textile-industry.jpg' },
      { id: 13, name: 'Product 13', description: 'Stylish cafe chair', price: '$15.75', image: 'https://cdn.divan.ru/img/v1/DJudJflHr3JRyMpWKrJwctDDAwZiDc1OsJoPmfhM7rw/rs:fit:1920:1440:0:0/g:ce:0:0/bg:ffffff/q:85/czM6Ly9kaXZhbi9ja2VkaXRvci93aWtpLWFydGljbGUvMjM2LzYwMzYzOTEzMGUwMzkuanBn.jpg' },
      { id: 14, name: 'Product 14', description: 'Stylish cafe chair', price: '$10.25', image: 'https://expert-matras.ua/uploads/shop/products/main/a4393f99f01470d3499bdfc1d0747929.jpg' },
      { id: 15, name: 'Product 15', description: 'Stylish cafe chair', price: '$11.75', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgzP9YdPmA6Be4aL3l3U75VOUVE7uFlkiyBA&s' },
    ];

    localStorage.setItem('products', JSON.stringify(sampleProducts));
    setProducts(sampleProducts);
  }, []);

  const handleProductClick = (productId) => {
    // Navigate to the product detail page using the product ID
    navigate(`/product/${productId}`);
  };

  return (
    <div className="shop-page">
      <div className="shop-header">
        <div className="breadcrumbs">
          <span>Home</span> &gt; <span>Shop</span>
        </div>
      </div>

      <div className="shop-controls">
        <div className="filter-sort">
          <button>Filter</button>
          <button>Sort by</button>
        </div>
        <div className="showing-results">
          Showing 1-15 of {products.length} results
        </div>
        <div className="view-options">
          <button className="grid-view active"></button>
          <button className="list-view"></button>
        </div>
      </div>

      <div className="product-grid">
        {products.map((product) => (
          <div
            key={product.id}
            className="product-card"
            onClick={() => handleProductClick(product.id)}
          >
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <p className="price">{product.price}</p>
          </div>
        ))}
      </div>

      <div className="pagination">
        <button>1</button> 
        <button>Next</button>
      </div>
    </div>
  );
};

export default Shop;
