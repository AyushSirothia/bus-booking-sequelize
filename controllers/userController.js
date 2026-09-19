const User = require("../models/user");

// Add a new user
const addUser = async (req, res) => {
    try {
        const { name, email } = req.body;

        const user = await User.create({
            name,
            email
        });

        res.status(201).json({
            message: "User added successfully",
            user: user
        });

    } catch (error) {
        res.status(500).json({
            message: "Error adding user",
            error: error.message
        });
    }
};

// Get all users
const getUsers = async (req, res) => {
    try {
        const users = await User.findAll();

        res.status(200).json(users);

    } catch (error) {
        res.status(500).json({
            message: "Error fetching users",
            error: error.message
        });
    }
};

module.exports = {
    addUser,
    getUsers
};