const calendar = require("../config/googleCalender");

const createCalendarEvent = async (booking) => {
  const event = {
    summary: `Consultation with ${booking.name}`,
    description: booking.agenda,

    start: {
      dateTime: new Date(
        Date.now() + 24 * 60 * 60 * 1000
      ).toISOString(),
      timeZone: "Asia/Kolkata",
    },

    end: {
      dateTime: new Date(
        Date.now() + 25 * 60 * 60 * 1000
      ).toISOString(),
      timeZone: "Asia/Kolkata",
    },
  };

  const response = await calendar.events.insert({
    calendarId: process.env.GOOGLE_CALENDAR_ID,
    requestBody: event, // preferred with newer googleapis
  });

  return response.data;
};

module.exports = createCalendarEvent;