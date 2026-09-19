const express = require("express");

const router = express.Router();

const {
    addUser,
    getUsers
} = require("../controllers/userController");

// POST /users
router.post("/", addUser);

// GET /users
router.get("/", getUsers);

module.exports = router;