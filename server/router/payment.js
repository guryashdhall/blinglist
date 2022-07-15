const router = require("express").Router();

const {
  makePayment,
  makeGiftCardPayment,
} = require("../controllers/paymentController");

router.post("/payment", makePayment);
router.post("/payGiftCard", makeGiftCardPayment);

module.exports = router;
