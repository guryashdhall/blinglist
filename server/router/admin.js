const router = require("express").Router();

const { createProduct } = require("../controllers/adminController");

router.post("/admin", createProduct);

module.exports = router;
