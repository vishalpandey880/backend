const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Student name is required"],
        trim: true
    },
    email: {
        type: String,
        required: [true, "Student email is required"],
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
    course: {
        type: String,
        required: [true, "Course is required"],
        trim: true
    },
    age: {
        type: Number,
        required: [true, "Age is required"],
        min: [1, "Age must be greater than 0"],
        max: [120, "Age must be valid"]
    }
}, { timestamps: true });

module.exports = studentSchema;
