const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema.Types;

const ordersSchema = new mongoose.Schema(
  {
    userID: String,
    totalPrice: Number,
    quantity: Number,
    itemsList: [String],
    status: String,
  },
  {
    timestamps: true,
  }
);

exports.Orders = mongoose.model("orders", ordersSchema);
