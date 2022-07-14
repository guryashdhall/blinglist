const router = require("express").Router();

const { getOrders,getOrderById,updateOrder,getOrderByUserId } = require("../controllers/orderController");

router.get("/previousorders/:id", getOrderByUserId);
router.get("/orderdetails/:id",getOrderById);
router.post("/previousorders/:id",updateOrder);
router.get("/orders",getOrders)
module.exports = router;
