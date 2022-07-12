const { Products } = require("../models/Product");

exports.createProduct = async (req, res) => {
    try{
        const product = req.body;

        //const existingProduct = await Products.find({ productName: product.productName })

        const newProduct = new Products({...product});
        await newProduct.save();

        res.status(201).json({
            success: true,
            message: "Product added successfully",
          });
    }
    catch(error){
        res.status(409).json({success: false, message: error.message})
    }
}