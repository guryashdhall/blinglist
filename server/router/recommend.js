const router = require("express").Router();

const { getSearchProducts } = require("../controllers/recommendationController");

router.get("/recommend/:search", getSearchProducts);

module.exports = router;