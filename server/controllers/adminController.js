const { Products } = require("../models/Product");


exports.getProducts = async (req, res) => {
    try {
        const getProducts = await Products.find();
        
        res.status(200).json({ products: getProducts });
      } catch (error) {
        res.status(404).json({ message: error.message });
    }
}


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

exports.deleteProduct = async (req, res) => {
    const {id} = req.params;

    //if(!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send("No post with this id");

    //await PostMessage.findByIdAndRemove(id)
    res.json({message: 'Post deleted successfully'});
}