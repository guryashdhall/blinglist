const router = require("express").Router();

const { getOrders,getOrderById,updateOrder } = require("../controllers/orderController");

router.get("/previousorders", getOrders);
router.get("/orderdetails/:id",getOrderById);
router.post("/previousorders/:id",updateOrder);
module.exports = router;
