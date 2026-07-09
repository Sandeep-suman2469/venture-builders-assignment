const express = require("express");
const cors = require("cors");

const bookingRoutes = require("./routes/bookingRoutes");

const app = express();

app.use(cors());

app.use(
  "/api/bookings/webhook",
  express.raw({ type: "application/json" })
);

app.use(express.json());

app.use("/api/bookings", bookingRoutes)

app.get("/", (req, res) => {
    res.send("Booking server running..");
});

app.listen(5000, () => {
    console.log("Booking server started..");
    
})