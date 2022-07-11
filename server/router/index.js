const router = require("express").Router();

router.use("/checkout", require("./payment"));

module.exports = router;
