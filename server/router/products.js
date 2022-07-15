const router = require("express").Router();

const { getProducts } = require("../controllers/productController");

router.get("/products/getproducts", getProducts);


module.exports = router;