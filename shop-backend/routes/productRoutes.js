const express = require('express');
const Product = require('../models/product');
const router = express.Router();

// GET all products
router.get('/api/products', async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching products' });
  }
});

// POST a new product (for testing or seeding)
router.post('/api/products', async (req, res) => {
  const { name, description, price, originalPrice, image, isNew, discountPercentage } = req.body;
  try {
    const product = new Product({
      name,
      description,
      price,
      originalPrice,
      image,
      isNew,
      discountPercentage,
    });
    const savedProduct = await product.save();
    res.status(201).json(savedProduct);
  } catch (error) {
    res.status(400).json({ message: 'Error saving product' });
  }
});

module.exports = router;
