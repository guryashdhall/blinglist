const router = require("express").Router();

const { addToSearch } = require("../controllers/searchController");

router.post("/addToSearch", addToSearch);

module.exports = router;