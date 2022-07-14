const { Products } = require("../models/Product");

exports.getSearchProducts = async (req, res) => {
  try {
    const { search } = req.params;
    const getProducts = await Products.find({ productType: search });

    res.status(200).json({ products: getProducts, success: true });
  } catch (error) {
    res.status(404).json({ message: error.message, success: false });
  }
}

exports.getNewArrivalsProducts = async (req, res) => {
  try {
    const recentEarringProducts = await Products.find({ productType: "earring" }).sort({createdAt: -1}).limit(6)
    const recentNecklaceProducts = await Products.find({ productType: "necklace" }).sort({createdAt: -1}).limit(6)
    const recentRingProducts = await Products.find({ productType: "ring" }).sort({createdAt: -1}).limit(6)

    res.status(200).json({ earring: recentEarringProducts, necklace: recentNecklaceProducts, ring: recentRingProducts, success: true });
  } catch (error) {
    res.status(404).json({ message: error.message, success: false });
  }
}