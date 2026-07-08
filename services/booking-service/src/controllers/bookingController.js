const prisma = require("../config/prisma");

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

module.exports = {
    createBooking,
};