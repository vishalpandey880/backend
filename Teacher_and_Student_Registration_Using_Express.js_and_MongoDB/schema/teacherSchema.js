const mongoose = require("mongoose");

const teacherSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Teacher name is required"],
        trim: true
    },
    email: {
        type: String,
        required: [true, "Teacher email is required"],
        unique: true,
        trim: true,
        lowercase: true,
        match: [/^[^\s@]+@[^\s@]+\.[^\s@]+$/, "Please enter a valid email address"]
    },
    password: {
        type: String,
        required: [true, "Password is required"],
        minlength: [6, "Password must be at least 6 characters long"]
    },
    subject: {
        type: String,
        required: [true, "Subject is required"],
        trim: true
    }
}, { timestamps: true });

module.exports = teacherSchema;
