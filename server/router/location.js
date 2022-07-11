const router = require("express").Router();

const { getLocations } = require("../controllers/locationController");

router.post("/location", getLocations);

module.exports = router;
