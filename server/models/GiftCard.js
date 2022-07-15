const mongoose = require("mongoose");

const giftCardSchema = new mongoose.Schema(
  {
    giftCardImage: String,
    amount: Number,
    deliveryAddress: String,
    username: String,
    email: String,
  },
  { timestamps: true }
);

exports.GiftCards = mongoose.model("GiftCards", giftCardSchema);
