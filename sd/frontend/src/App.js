import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './components/HomePage';
import CategoryPage from './components/CategoryPage';
import CartPage from './components/CartPage';
import Footer from './components/Footer';
import Shop from './components/Shop';
import ProductDetail from './components/ProductDetail';
import './App.css';

import productsData from './data/products.json';


const App = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Simulate fetching from a file or API
    setProducts(productsData);
  }, []);

  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 16;
  const totalPages = Math.ceil(products.length / productsPerPage);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const currentProducts = products.slice(
    (currentPage - 1) * productsPerPage,
    currentPage * productsPerPage
  );


  return (
    <Router>
      <Navbar />
  
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/textile" element={<CategoryPage products={products.filter(product => product.category === 'Textile')} />} />
        <Route path="/dith" element={<CategoryPage products={products.filter(product => product.category === 'Dith')} />} />
        <Route path="/clothing-for-namaz" element={<CategoryPage products={products.filter(product => product.category === 'Clothing for Namaz')} />} />
        <Route path="/cart" element={<CartPage cartItems={[]} />} />
        <Route path="/shop" element={<Shop />} /> 
        <Route path="/product/:id" element={<ProductDetail />} />

      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
