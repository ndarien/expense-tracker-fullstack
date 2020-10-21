const express = require("express");
const router = express.Router();
const { getBalance, addBalance } = require("../controllers/balance");

router.route("/").get(getBalance).post(addBalance);

module.exports = router;
