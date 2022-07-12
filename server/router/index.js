const router = require("express").Router();

router.use("/checkout", require("./payment"));
router.use("/", require("./order"));
router.use("/administration", require("./admin"))

module.exports = router;
