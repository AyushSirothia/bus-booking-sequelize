const User = require("./userModel");
const Bus = require("./busModel");
const Booking = require("./bookingModel");

// User - Booking Association
User.hasMany(Booking, {
    foreignKey: "userId"
});

Booking.belongsTo(User, {
    foreignKey: "userId"
});

// Bus - Booking Association
Bus.hasMany(Booking, {
    foreignKey: "busId"
});

Booking.belongsTo(Bus, {
    foreignKey: "busId"
});

module.exports = {
    User,
    Bus,
    Booking
};