const Bus = require("../models/bus");
const { Op } = require("sequelize");

// Add a new bus
const addBus = async (req, res) => {
    try {
        const {
            busName,
            source,
            destination,
            totalSeats,
            availableSeats
        } = req.body;

        const bus = await Bus.create({
            busName,
            source,
            destination,
            totalSeats,
            availableSeats
        });

        res.status(201).json({
            message: "Bus added successfully",
            bus: bus
        });

    } catch (error) {
        res.status(500).json({
            message: "Error adding bus",
            error: error.message
        });
    }
};

// Get buses with available seats greater than specified number
const getAvailableBuses = async (req, res) => {
    try {
        const seats = req.params.seats;

        const buses = await Bus.findAll({
            where: {
                availableSeats: {
                    [Op.gt]: seats
                }
            }
        });

        res.status(200).json(buses);

    } catch (error) {
        res.status(500).json({
            message: "Error fetching buses",
            error: error.message
        });
    }
};

module.exports = {
    addBus,
    getAvailableBuses
};