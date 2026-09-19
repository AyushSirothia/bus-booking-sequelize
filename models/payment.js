const { DataTypes } = require("sequelize");
const sequelize = require("../utils/db-connection");

const Payment = sequelize.define("Payment", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },

    bookingId: {
        type: DataTypes.INTEGER,
        allowNull: false
    },

    amount: {
        type: DataTypes.INTEGER,
        allowNull: false
    },

    paymentStatus: {
        type: DataTypes.STRING,
        allowNull: false
    }
});

module.exports = Payment;