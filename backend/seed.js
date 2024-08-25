// seed.js
const mongoose = require('mongoose');
const Product = require('./models/Product');

mongoose.connect('mongodb://localhost:27017/', { useNewUrlParser: true, useUnifiedTopology: true });

const seedProducts = async () => {
  await Product.deleteMany(); // Clear existing products

  const products = [
    {
      name: 'Asgaard Sofa',
      price: 250000,
      description: 'A compact, stout-hearted sofa with a well-balanced design.',
      imageUrls: [
        'https://your-image-url.com/sofa1.png',
        'https://your-image-url.com/sofa2.png',
        'https://your-image-url.com/sofa3.png',
      ],
      category: 'Sofas',
      size: ['L', 'XL', 'XS'],
      colorOptions: ['#000000', '#FFFFFF', '#FFD700'],
      sku: 'SS001',
      stock: 20,
      tags: ['Sofa', 'Chair', 'Home', 'Shop'],
      rating: 4.5,
      reviews: [
        { user: 'John Doe', rating: 5, comment: 'Great sofa, very comfortable!' },
        { user: 'Jane Doe', rating: 4, comment: 'Good value for money.' },
      ],
    },
    // Add more product objects as needed...
  ];

  await Product.insertMany(products);
  console.log('Products seeded!');
  mongoose.connection.close();
};

seedProducts();
