const { Booking, User, Bus } = require("../models/associations");

function getAllBookings(req, res) {
    Booking.findAll({
        include: [
            {
                model: User,
                attributes: ["name", "email"]
            },
            {
                model: Bus,
                attributes: ["busName", "source", "destination"]
            }
        ]
    })
    .then(bookings => {
        res.json(bookings);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json({
            message: "Error fetching bookings"
        });
    });
}

module.exports = {
    getAllBookings
};