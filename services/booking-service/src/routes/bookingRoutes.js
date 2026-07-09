const express = require("express");

const { createBooking, createCheckoutSession, stripeWebhook } = require("../controllers/bookingController")

const router = express.Router();

router.post("/", createBooking);

router.post("/checkout", createCheckoutSession);

router.post("/webhook", stripeWebhook);

module.exports = router;