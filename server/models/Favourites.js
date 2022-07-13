const mongoose = require("mongoose");

const favouritesSchema = new mongoose.Schema(
  {
    userID: String,
    productId: String,
  },
  {
    timestamps: true,
  }
);

exports.Favourites = mongoose.model("favourites", favouritesSchema);