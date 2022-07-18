const mongoose = require("mongoose");

const promoCodeSchema = new mongoose.Schema(
  {
    name: String,
    discount: Number,
  },
  { timestamps: true }
);

exports.PromoCode = mongoose.model("PromoCode", promoCodeSchema);
