const router = require("express").Router();

router.use("/checkout", require("./payment"));
router.use("/", require("./order"));

module.exports = router;
