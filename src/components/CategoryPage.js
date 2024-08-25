import React from 'react';
import Sidebar from './Sidebar';
import ProductCard from './ProductCard';
import './styles/CategoryPage.css';

const CategoryPage = ({ products }) => {
    return (
        <div className="category-page">
            <Sidebar />
            <div className="product-grid">
                {products.map(product => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>
        </div>
    );
};

export default CategoryPage;
