// models/Product.js
const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true },
  description: { type: String, required: true },
  imageUrls: [{ type: String }], 
  category: { type: String, required: true },
  size: [{ type: String }], 
  colorOptions: [{ type: String }], 
  sku: { type: String, required: true },
  stock: { type: Number, default: 0 },
  tags: [{ type: String }],
  rating: { type: Number, default: 0 },
  reviews: [
    {
      user: { type: String, required: true },
      rating: { type: Number, required: true },
      comment: { type: String, required: true },
    },
  ],
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;
