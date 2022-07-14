const { Products } = require("../models/Product");

exports.getSearchProducts = async (req, res) => {
    try {
        const {search} = req.params;
        const getProducts = await Products.find({ productType: search });
        
        res.status(200).json({ products: getProducts, success: true });
      } catch (error) {
        res.status(404).json({ message: error.message, success: false });
    }
}