const User = require("./models/user");
const Bus = require("./models/bus");

const insertData = async () => {
    try {
        // Insert 3 users
        await User.create({
            name: "Ayush",
            email: "ayush@gmail.com"
        });

        await User.create({
            name: "Rahul",
            email: "rahul@gmail.com"
        });

        await User.create({
            name: "Amit",
            email: "amit@gmail.com"
        });

        console.log("3 users inserted successfully");

        // Insert 2 buses
        await Bus.create({
            busName: "Express Travels",
            source: "Sagar",
            destination: "Bhopal",
            totalSeats: 40,
            availableSeats: 25
        });

        await Bus.create({
            busName: "City Travels",
            source: "Indore",
            destination: "Sagar",
            totalSeats: 50,
            availableSeats: 8
        });

        console.log("2 buses inserted successfully");

        process.exit();

    } catch (error) {
        console.log(error.message);
    }
};

insertData();