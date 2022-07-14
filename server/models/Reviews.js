const mongoose = require("mongoose");

const reviewsSchema = new mongoose.Schema({
  title: String,
  description: String,
  rating: Number,
});

exports.Reviews = mongoose.model("Comments", reviewsSchema);