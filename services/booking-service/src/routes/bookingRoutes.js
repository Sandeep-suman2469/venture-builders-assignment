const express = require("express");

const { createBooking, createCheckoutSession } = require("../controllers/bookingController")

const router = express.Router();

router.post("/", createBooking);

router.post("/checkout", createCheckoutSession);

module.exports = router;