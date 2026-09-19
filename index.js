const express = require("express");

const sequelize = require("./utils/db-connection");

// Import models
const User = require("./models/user");
const Bus = require("./models/bus");
const Booking = require("./models/booking");
const Payment = require("./models/payment");

// Import routes
const userRoutes = require("./routes/userRoutes");
const busRoutes = require("./routes/busRoutes");

const app = express();
require("./models/associations");

// Middleware
app.use(express.json());

// Routes
app.use("/users", userRoutes);
app.use("/buses", busRoutes);

// Test route
app.get("/", (req, res) => {
    res.send("Bus Booking API is running");
});

// Start server and create tables
const startServer = async () => {
    try {
        await sequelize.authenticate();

        console.log("Database connected successfully");

        await sequelize.sync();

        console.log("Tables created successfully");

        app.listen(3000, () => {
            console.log("Server is running on port 3000");
        });

    } catch (error) {
        console.log("Error:", error.message);
    }
};

startServer();