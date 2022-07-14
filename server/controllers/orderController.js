const stripe = require("stripe")(
    "sk_test_51LIC1bE41Y5D29LDh8L9rJtAivoKhMhAxj7dp1oQlIlmiZ73wAg8mKWlFeO0tJkMVzsCknQIRMXyge0HzgEyIFtc00SYXO38ly"
);

const { Orders } = require("../models/Orders");
const ObjectId = require("mongodb").ObjectId;

exports.getOrders = async (req, res) => {
    try {
        const orderData = await Orders.find();
        if (orderData == null) {
            return res.status(501).json({
                success: false,
                error: `Somethingg went wrong!`
            });
        } else {
            return res.status(200).json({
                success: true,
                data: orderData
            });
        }
    } catch (error) {
        return res
            .status(501)
            .json({
                success: false,
                error: `Somethingg went wrong! ${error}`
            });
    }
}

exports.getOrderById = async (req, res) => {
    try {
        const query = req.params.id;
        const orderData = await Orders.find({_id:ObjectId(query)}).populate("itemsList");
        if (orderData == null) {
            return res.status(501).json({
                success: false,
                error: `Somethingg went wrong!`
            });
        } else {
            return res.status(200).json({
                success: true,
                data: orderData
            });
        }
    } catch (error) {
        return res
            .status(501)
            .json({
                success: false,
                error: `Somethingg went wrong! ${error}`
            });
    }
}

exports.getOrderByUserId = async (req, res) => {
    try {
        const query = req.params.id;
        const orderData = await Orders.find({userID: ObjectId(query)}).populate("itemsList");
        
        if (orderData == null) {
            return res.status(501).json({
                success: false,
                error: `Somethingg went wrong!`
            });
        } else {
            return res.status(200).json({
                success: true,
                data: orderData
            });
        }
    } catch (error) {
        return res
            .status(501)
            .json({
                success: false,
                error: `Somethingg went wrong! ${error}`
            });
    }
}

exports.updateOrder = async (req, res) => {
    try {
        const {id: _id} = req.params; 
        
        const orderData = await Orders.findByIdAndUpdate(_id,{$set: {status: "Cancelled"}});
        if (orderData.matchedCount < 1){
            return res.status(501).json({
                success: false,
                error: `Somethingg went wrong!`
            });
        } else {
            return res.status(200).json({
                success: true,
                message: "updated!",
            });
        }
    } catch (error) {
        return res
            .status(501)
            .json({
                success: false,
                error: `Somethingg went wrong! ${error}`
            });
    }
}