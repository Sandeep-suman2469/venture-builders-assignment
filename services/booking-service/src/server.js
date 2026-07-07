const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    res.send("Booking server running..");
});

app.listen(5000, () => {
    console.log("Booking server started..");
    
})