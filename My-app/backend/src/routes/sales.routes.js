const express = require("express");
const router = express.Router();

const {
  addSale,
  getSalesSummary,
  getAllSales
} = require("../controllers/sales.controller");

// POST /sales
router.post("/", addSale);

// GET /sales
router.get("/", getAllSales);

// GET /sales/summary
router.get("/summary", getSalesSummary);

module.exports = router;
