const router = require("express").Router();

router.use("/checkout", require("./payment"));
router.use("/", require("./order"));
router.use("/administration", require("./admin"))
router.use("/favourites", require("./favourites"))
router.use("/search", require("./search"))
router.use("/recommendation", require("./recommend"))

module.exports = router;
