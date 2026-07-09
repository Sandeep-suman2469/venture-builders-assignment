const express = require("express");

const { createBooking, createCheckoutSession, stripeWebhook } = require("../controllers/bookingController")

const router = express.Router();

router.post("/", createBooking);

router.post("/checkout", createCheckoutSession);

router.post(
    "/webhook",
    express.raw({
        type: "application/json",
    }),
    stripeWebhook
)

module.exports = router;