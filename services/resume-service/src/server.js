const express = require("express");
const cors  = require("cors");
const { log } = require("node:console");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) =>{
    res.send("resume service running")
});c

app.listen(5002, () =>{
    console.log("resume service started");
    
});