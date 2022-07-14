const { Products } = require("../models/Product");
const { Orders } = require("../models/Orders");

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
    const recentEarringProducts = await Products.find({ productType: "earring" }).sort({ createdAt: -1 }).limit(6)
    const recentNecklaceProducts = await Products.find({ productType: "necklace" }).sort({ createdAt: -1 }).limit(6)
    const recentRingProducts = await Products.find({ productType: "ring" }).sort({ createdAt: -1 }).limit(6)

    res.status(200).json({ earring: recentEarringProducts, necklace: recentNecklaceProducts, ring: recentRingProducts, success: true });
  } catch (error) {
    res.status(404).json({ message: error.message, success: false });
  }
}

exports.getMostPopularProducts = async (req, res) => {
  try {
    Orders.aggregate(
      [
        {
          "$project": {
            "itemsList": 1
          }
        },
        { "$unwind": "$itemsList" },
        { "$group": { _id: "$itemsList", count: { $sum: 1 } } },
        {
          "$lookup": {
            "from": "products",
            "localField": "_id",
            "foreignField": "_id",
            "as": "productsList"
          },
        },
        { "$unwind": "$productsList" },
      ],
      (err, docs) => {
        if (err) {
          res.status(404).json({ message: err.message, success: false });
        } else {
          res.status(200).json({
            message: docs,
            success: true,
          });
        }
      })
  } catch (error) {
    res.status(404).json({ message: error.message, success: false });
  }
}