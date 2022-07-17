const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema.Types;
const cartSchema = new mongoose.Schema({
  userid: ObjectId,
  items:[]
});

exports.Cart = mongoose.model("cart", cartSchema);