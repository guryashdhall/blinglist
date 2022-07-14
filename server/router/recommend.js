const router = require("express").Router();

const { getSearchProducts, getNewArrivalsProducts, getMostPopularProducts } = require("../controllers/recommendationController");

router.get("/recommend/:search", getSearchProducts);
router.get("/newarrivals", getNewArrivalsProducts);
router.get("/mostpopular", getMostPopularProducts);

module.exports = router;