const express = require("express");
const Teacher = require("../model/teacherModel");

let bcrypt;
try {
    bcrypt = require("bcryptjs");
} catch (e) {
    bcrypt = require("bcrypt");
}

const router = express.Router();

// POST /teacher/register - Register a new teacher
router.post("/register", async (req, res) => {
    try {
        const { name, email, password, subject } = req.body;

        // Step 1: Validate required fields
        if (!name || !email || !password || !subject) {
            return res.status(400).json({
                error: "Validation error: Name, email, password, and subject are all required."
            });
        }

        // Email format check
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email.trim())) {
            return res.status(400).json({
                error: "Validation error: Please provide a valid email address."
            });
        }

        // Password length check
        if (password.length < 6) {
            return res.status(400).json({
                error: "Validation error: Password must be at least 6 characters long."
            });
        }

        // Step 2: Check if teacher email already exists
        const existingTeacher = await Teacher.findOne({ email: email.toLowerCase().trim() });
        if (existingTeacher) {
            return res.status(409).json({
                error: "A teacher with this email already exists."
            });
        }

        // Step 3: Hash password using bcrypt
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        // Step 4: Store in MongoDB 'teachers' collection
        const newTeacher = new Teacher({
            name: name.trim(),
            email: email.toLowerCase().trim(),
            password: hashedPassword,
            subject: subject.trim()
        });

        await newTeacher.save();

        // Step 5: Return success response (without exposing password)
        return res.status(201).json({
            message: "Teacher registered successfully",
            teacher: {
                id: newTeacher._id,
                name: newTeacher.name,
                email: newTeacher.email,
                subject: newTeacher.subject
            }
        });
    } catch (error) {
        console.error("Teacher registration error:", error);
        return res.status(500).json({
            error: "Internal server error",
            details: error.message
        });
    }
});

// GET /teacher/all - Get all teachers (for testing & verification)
router.get("/all", async (req, res) => {
    try {
        const teachers = await Teacher.find().select("-password");
        res.status(200).json(teachers);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;
