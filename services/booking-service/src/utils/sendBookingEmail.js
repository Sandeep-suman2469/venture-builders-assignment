const transporter = require("../config/mailer");
const { booking } = require("../config/prisma");


const sendBookingEmail = async (booking) =>{
    await transporter.sendMail({
        from: process.env.EMAIL_USER,
        to: booking.email,
        subject: "Consultation Booking Confirmed",

        html: `
        <h2>Booking Confirmed</h2>

        <p>Hello ${booking.name},</p>

        <p>Your consultation booking has been confirmed.</p>

        <p><strong>Agenda:</strong> ${booking.agenda}</p>

        <p>Payment Status: Paid</p>

        <p>Thank you.</p>
    `,
    })
};

module.exports = sendBookingEmail;