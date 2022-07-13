const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  productName: String,
  productType: String,
  productPrice: Number,
  productDescription: String,
  productColor: String,
  metalType: String,
  inventoryQuantity: Number,
  productImage: String,
});

exports.Products = mongoose.model("Products", productSchema);
