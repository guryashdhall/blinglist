const { Products } = require("../models/Product");


exports.getProducts = async (req, res) => {
  try {
    const data = await Products.find();
    res.status(200);
    res.send(data);
  } catch (error) {
    res.status(400);
    res.send({ error: error });
  }
};