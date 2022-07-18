const router = require("express").Router();

const {
  makePayment,
  makeGiftCardPayment,
  checkPromoCode,
} = require("../controllers/paymentController");

router.post("/payment", makePayment);
router.post("/payGiftCard", makeGiftCardPayment);
router.get("/checkPromoCode/:promoCode", checkPromoCode);

module.exports = router;
