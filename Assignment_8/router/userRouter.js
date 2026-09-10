const express = require("express");
const User = require("../model/userModel");

const router = express.Router();

// POST /api/users - Create new user
router.post("/users", async (req, res) => {
    try {
        const { name, email, age, course } = req.body;

        // Validation
        if (!name || !email || age === undefined || age === null || !course) {
            return res.status(400).json({
                error: "Validation error: Name, email, age, and course are required."
            });
        }

        const newUser = new User({
            name: name.trim(),
            email: email.trim(),
            age: Number(age),
            course: course.trim()
        });

        const savedUser = await newUser.save();

        res.status(201).json({
            message: "User created successfully",
            user: savedUser
        });
    } catch (error) {
        if (error.code === 11000) {
            return res.status(409).json({
                error: "User with this email already exists."
            });
        }
        res.status(500).json({
            error: "Database error while creating user",
            details: error.message
        });
    }
});

// GET /api/users - Retrieve all users
router.get("/users", async (req, res) => {
    try {
        const users = await User.find();
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({
            error: "Database error while retrieving users",
            details: error.message
        });
    }
});

module.exports = router;
