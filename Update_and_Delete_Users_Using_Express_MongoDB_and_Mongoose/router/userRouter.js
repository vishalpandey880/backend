const express = require("express");
const mongoose = require("mongoose");
const User = require("../model/userModel");

const router = express.Router();

// Helper: Create user (for testing)
router.post("/", async (req, res) => {
    try {
        const { name, email, age, course } = req.body;
        if (!name || !email || !age || !course) {
            return res.status(400).json({ error: "Invalid request data. All fields are required." });
        }
        const user = new User({ name, email, age, course });
        await user.save();
        res.status(201).json({ message: "User created successfully", user });
    } catch (error) {
        res.status(500).json({ error: "Database error", details: error.message });
    }
});

// Helper: Get all users (for testing)
router.get("/", async (req, res) => {
    try {
        const users = await User.find();
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({ error: "Database error", details: error.message });
    }
});

// PATCH /api/users/:id - Update user by ID
router.patch("/:id", async (req, res) => {
    const { id } = req.params;

    // Validate MongoDB ObjectId
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).json({ error: "Invalid MongoDB ID format." });
    }

    // Validate request body
    if (!req.body || Object.keys(req.body).length === 0) {
        return res.status(400).json({ error: "Invalid request data. Nothing to update." });
    }

    try {
        const updatedUser = await User.findByIdAndUpdate(
            id,
            req.body,
            { new: true, runValidators: true }
        );

        if (!updatedUser) {
            return res.status(404).json({ error: "User not found." });
        }

        res.status(200).json({
            message: "User updated successfully"
        });
    } catch (error) {
        res.status(500).json({
            error: "Database error",
            details: error.message
        });
    }
});

// DELETE /api/users/:id - Delete user by ID
router.delete("/:id", async (req, res) => {
    const { id } = req.params;

    // Validate MongoDB ObjectId
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).json({ error: "Invalid MongoDB ID format." });
    }

    try {
        const deletedUser = await User.findByIdAndDelete(id);

        if (!deletedUser) {
            return res.status(404).json({ error: "User not found." });
        }

        res.status(200).json({
            message: "User deleted successfully"
        });
    } catch (error) {
        res.status(500).json({
            error: "Database error",
            details: error.message
        });
    }
});

module.exports = router;
