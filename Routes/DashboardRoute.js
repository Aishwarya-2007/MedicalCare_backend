const express = require("express");

const router = express.Router();

const {
  getDashboardStats,
} = require(
  "../Controllers/DashboardController"
);

router.get("/", getDashboardStats);

module.exports = router;