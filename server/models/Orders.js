// **Name** : Suchitra Dhamu
// **Banner ID** : B0897187
// **Group Id** : 7

const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema.Types;
const productSchema = require("../models/Product");

const ordersSchema = new mongoose.Schema(
  {
    userID: ObjectId,
    totalPrice: Number,
    quantity: Number,
    tax: Number,
    retail: Number,
    address: String,
    itemsList: [{ type: mongoose.Schema.Types.ObjectId, ref: "Products" }],
    status: String,
  },
  {
    timestamps: true,
  }
);

exports.Orders = mongoose.model("orders", ordersSchema);
