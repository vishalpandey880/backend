const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, "Name is required"],
            trim: true
        },
        email: {
            type: String,
            required: [true, "Email is required"],
            unique: true,
            trim: true,
            lowercase: true
        },
        age: {
            type: Number,
            required: [true, "Age is required"],
            min: [1, "Age must be greater than 0"]
        },
        course: {
            type: String,
            required: [true, "Course is required"],
            trim: true
        }
    },
    { timestamps: true }
);

module.exports = userSchema;
