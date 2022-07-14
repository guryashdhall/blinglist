const router = require("express").Router();

const { getReviews,addReviews } = require("../controllers/reviewsController");

router.post("/reviews/addreviews", addReviews);
router.get("/reviews/getreviews", getReviews);


module.exports = router;