const express = require("express");
const Student = require("../model/studentModel");

let bcrypt;
try {
    bcrypt = require("bcryptjs");
} catch (e) {
    bcrypt = require("bcrypt");
}

const router = express.Router();

// POST /student/register - Register a new student
router.post("/register", async (req, res) => {
    try {
        const { name, email, password, course, age } = req.body;

        // Step 1: Validate required fields
        if (!name || !email || !password || !course || age === undefined || age === null) {
            return res.status(400).json({
                error: "Validation error: Name, email, password, course, and age are all required."
            });
        }

        // Email format check
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email.trim())) {
            return res.status(400).json({
                error: "Validation error: Please provide a valid email address."
            });
        }

        // Age numeric check
        const parsedAge = Number(age);
        if (isNaN(parsedAge) || parsedAge <= 0 || parsedAge > 120) {
            return res.status(400).json({
                error: "Validation error: Age must be a valid number between 1 and 120."
            });
        }

        // Password length check
        if (password.length < 6) {
            return res.status(400).json({
                error: "Validation error: Password must be at least 6 characters long."
            });
        }

        // Step 2: Check if student email already exists
        const existingStudent = await Student.findOne({ email: email.toLowerCase().trim() });
        if (existingStudent) {
            return res.status(409).json({
                error: "A student with this email already exists."
            });
        }

        // Step 3: Hash password using bcrypt
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        // Step 4: Store in MongoDB 'students' collection
        const newStudent = new Student({
            name: name.trim(),
            email: email.toLowerCase().trim(),
            password: hashedPassword,
            course: course.trim(),
            age: parsedAge
        });

        await newStudent.save();

        // Step 5: Return success response (without exposing password)
        return res.status(201).json({
            message: "Student registered successfully",
            student: {
                id: newStudent._id,
                name: newStudent.name,
                email: newStudent.email,
                course: newStudent.course,
                age: newStudent.age
            }
        });
    } catch (error) {
        console.error("Student registration error:", error);
        return res.status(500).json({
            error: "Internal server error",
            details: error.message
        });
    }
});

// GET /student/all - Get all students (for testing & verification)
router.get("/all", async (req, res) => {
    try {
        const students = await Student.find().select("-password");
        res.status(200).json(students);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;
