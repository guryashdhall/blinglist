const router = require("express").Router();

const { makePayment } = require("../controllers/paymentController");

router.post("/payment", makePayment);

module.exports = router;
