const router = require("express").Router();

const { getProducts, createProduct, deleteProduct } = require("../controllers/adminController");

router.get("/admin", getProducts);
router.post("/admin", createProduct);
router.delete('/:id', deleteProduct)

module.exports = router;
