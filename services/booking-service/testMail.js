
require("dotenv").config();

const sendBookingEmail = require("./src/utils/sendBookingEmail");

console.log("EMAIL_USER:", process.env.EMAIL_USER);
console.log("EMAIL_PASS EXISTS:", !!process.env.EMAIL_PASS);
console.log("EMAIL_PASS LENGTH:", process.env.EMAIL_PASS?.length);

sendBookingEmail({
  name: "Sandeep",
  email: "cu.18bcs3395@gmail.com",
  agenda: "Testing email feature",
})
.then(() => console.log("Email Sent"))
.catch(console.error);
