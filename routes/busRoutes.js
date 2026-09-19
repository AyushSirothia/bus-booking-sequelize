const express = require("express");

const router = express.Router();

const {
    addBus,
    getAvailableBuses
} = require("../controllers/busController");

// POST /buses
router.post("/", addBus);

// GET /buses/available/:seats
router.get("/available/:seats", getAvailableBuses);

module.exports = router;