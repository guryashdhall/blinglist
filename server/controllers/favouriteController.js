const { Favourites } = require("../models/Favourites");
const { Products } = require("../models/Product");
const { Search }=require("../models/Search");
const ObjectId = require("mongodb").ObjectId;

exports.addToFavourites = async (req, res) => {
    try {
        const { user_id, product_id } = req.body;
        const alreadyFavourited = await Favourites.find({ user_id: user_id, product_id: product_id })
        if (alreadyFavourited.matchedCount == 0) {
            const data = await Favourites.insertOne({ user_id: user_id, product_id: product_id });
            if (data == null || data == '') {
                return res.status(400).json({
                    success: false,
                    error: `Something went wrong!`
                });
            } else {
                return res.status(200).json({
                    data: data,
                    message: `Product added to favourites successfully!`,
                    success: true
                });
            }
        } else {
            return res.status(400).json({
                success: false,
                error: `Product already added to favourites!`
            });
        }

    } catch (error) {
        return res
            .status(400)
            .json({
                success: false,
                error: `Something went wrong! ${error}`
            });
    }
}

exports.fetchFavourites = async (req, res) => {
    try {
        const id = req.params.id;
        const data = await Favourites.aggregate({
            $lookup:
            {
                from: "products",
                localField: "productId",
                foreignField: "_id",
                as: "productsDetails"
              }
         });
        if (favouritesData == null) {
            return res.status(400).json({
                            success: false,
                        message: `Something went wrong!`
            });
        } else {
            return res.status(200).json({
                            data: data,
                        message: `Favourite Products fetched successfully!`,
                        success: true
            });
        }
    } catch (error) {
        return res
                        .status(400)
                        .json({
                            success: false,
                        message: `Something went wrong! ${error}`,
                        data: []
            });
    }
}

exports.removeFavourites= async (req, res) => {
    try {
        const {user_id, product_id} = req.body;
                        const data=await Favourites.deleteOne({user_id: user_id, product_id: product_id })
        return res.status(200).json({data: data});
    } catch (error) {
        return res
                        .status(400)
                        .json({
                            success: false,
                        message: `Something went wrong! ${error}`,
                        data: []
            });
    }
}

exports.addToCart = async (req, res) => {
    try {
        const {user_id, product_id} = req.body; 
        return res.status(400).json({})
    } catch (error) {
        return res
                        .status(400)
                        .json({
                            success: false,
                        message: `Something went wrong! ${error}`,
                        data: []
            });
    }
}

exports.addToSearch=async (req, res) => {
    try {
        const {user_id, keyword} = req.body; 
        console.log(req.body);
        const data=await Search.insertOne({userId: ObjectId(user_id), keyword: keyword});
        if(data==null){
            return res.status(400).json({message: "Fail", success: false})
        } else {
            return res.status(200).json({message: 'Success', success: true })
        }
        
    } catch (error) {
        return res
                        .status(400)
                        .json({
                            success: false,
                        message: `Something went wrong! ${error}`,
                        data: []
            });
    }
}