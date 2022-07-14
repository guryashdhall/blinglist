const { Search } = require("../models/Search");
const ObjectId = require("mongodb").ObjectId;

exports.addToSearch = async (req, res) => {
    try {
        const { user_id, keyword } = req.body;
        console.log(req.body);
        const data = await Search.insertOne({ userId: ObjectId(user_id), keyword: keyword });
        if (data == null) {
            return res.status(400).json({ message: "Fail", success: false })
        } else {
            return res.status(200).json({ message: 'Success', success: true })
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