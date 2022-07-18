const router = require("express").Router();
const { addCart, getCart } = require("../controllers/cartController");
router.post("/cart/addCart", addCart);
router.post("/cart/getCart", getCart);
module.exports = router;