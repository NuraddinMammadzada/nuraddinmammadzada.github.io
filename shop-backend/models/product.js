const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  originalPrice: { type: Number },
  image: { type: String, required: true },
  isNew: { type: Boolean, default: false },
  discountPercentage: { type: Number },
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;
     