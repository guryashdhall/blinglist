const { Cart } = require("../models/Cart");
exports.addCart = async (req, res) => {
    const newCart = Cart({ ...req.body });
  try {
    await newCart.save();
    res.status(201);
    res.send({ success: "Cart Added Successfully" });
  } catch (error) {
    res.status(400);
    res.send({ error: error });
  }
}
