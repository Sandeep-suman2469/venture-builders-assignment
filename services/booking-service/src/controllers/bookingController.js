const prisma = require("../config/prisma");

const stripe = require("../config/stripe");

const createBooking = async (req, res) =>{
    try{
        const { name, email, phone, agenda } = req.body;

        const booking = await prisma.booking.create({
            data : {
                name,
                email,
                phone,
                agenda,
            },
        })

        res.status(201).json({
            success : true,
            data : booking,
        })
    } catch (error) {
        console.log(error);

        res.status(500).json({
            success : false,
            message : error.message,
        })
        
    }
};


const createCheckoutSession =
  async (req, res) => {
    try {
      const {
        bookingId
      } = req.body;

      const session =
        await stripe.checkout.sessions.create({
          payment_method_types: ["card"],

          line_items: [
            {
              price_data: {
                currency: "usd",

                product_data: {
                  name:
                    "Consultation Booking",
                },

                unit_amount: 5000,
              },

              quantity: 1,
            },
          ],

          mode: "payment",

          success_url:
            "http://localhost:3000/success",

          cancel_url:
            "http://localhost:3000/cancel",

          metadata: {
            bookingId,
          },
        });

      res.json({
        url: session.url,
      });
    } catch (error) {
      console.log(error);

      res.status(500).json({
        message:
          "Failed to create checkout session",
      });
    }
  };

const stripeWebhook = async (req, res) =>{

    const sig = req.headers["stripe-signature"];

    let event;

    try{
        event = stripe.webhooks.constructEvent(
            req.body,
            sig,
            process.env.STRIPE_WEBHOOK_SECRET
        );
    } catch (err){
        return res.status(400).send( `Webhook Error: ${err.message}`);
    }

    if(event.type === "checkout.session.completed"){

        const session = event.data.object;

        const bookingId = session.metadata.bookingId;

        await prisma.booking.update({
            where: {
                id: Number(bookingId),
            },
            data:{
                paymentStatus: "paid",
            },
        });

        console.log("Payment successful");
    }

    res.json({ received: true, });
}


  module.exports = {
  createBooking,
  createCheckoutSession,
  stripeWebhook
};