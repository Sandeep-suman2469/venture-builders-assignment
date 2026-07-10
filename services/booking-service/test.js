
// require("dotenv").config();
// const { google } = require("googleapis");

// async function test() {
//   const auth = new google.auth.GoogleAuth({
//     keyFile: "./service-account.json",
//     scopes: ["https://www.googleapis.com/auth/calendar"],
//   });

//   const client = await auth.getClient();

//   const calendar = google.calendar({
//     version: "v3",
//     auth: client,
//   });

//   const res = await calendar.calendarList.list();

//   console.log("AUTH SUCCESS");
//   console.log(res.data);
// }

// test().catch((err) => {
//   console.error("AUTH FAILED");
//   console.error(err.response?.data || err);
// });

require("dotenv").config();
const { google } = require("googleapis");

async function test() {
  const auth = new google.auth.GoogleAuth({
    keyFile: "./service-account.json",
    scopes: ["https://www.googleapis.com/auth/calendar"],
  });

  const client = await auth.getClient();

  const calendar = google.calendar({
    version: "v3",
    auth: client,
  });

  const response = await calendar.events.insert({
    calendarId: process.env.GOOGLE_CALENDAR_ID,
    requestBody: {
      summary: "Consulting Session Test",
      description: "Booking Service Test Event",
      start: {
        dateTime: new Date(Date.now() + 3600000).toISOString(),
        timeZone: "Asia/Kolkata",
      },
      end: {
        dateTime: new Date(Date.now() + 7200000).toISOString(),
        timeZone: "Asia/Kolkata",
      },
    },
  });

  console.log("EVENT CREATED");
  console.log(response.data.htmlLink);
}

test().catch(console.error);