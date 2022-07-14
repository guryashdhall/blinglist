const router = require("express").Router();

const { getSearchProducts, getNewArrivalsProducts } = require("../controllers/recommendationController");

router.get("/recommend/:search", getSearchProducts);
router.get("/newarrivals", getNewArrivalsProducts);

module.exports = router;