const router = require("express").Router();
const { addCart } = require("../controllers/cartController");
router.post("/cart/addCart", addCart);
module.exports = router;