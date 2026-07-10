const { google } = require("googleapis");

const auth = new google.auth.GoogleAuth({
  keyFile: "./service-account.json",
  scopes: ["https://www.googleapis.com/auth/calendar"],
});

module.exports = google.calendar({
  version: "v3",
  auth,
});