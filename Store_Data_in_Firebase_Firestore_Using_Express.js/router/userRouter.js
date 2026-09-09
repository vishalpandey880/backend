const express = require("express");
const db = require("../config/firebase");
const { validateUser } = require("../schema/userSchema");

const router = express.Router();

// POST /api/users - Validate and store user data into Firestore
router.post("/", async (req, res) => {
    try {
        const userData = req.body;

        // Step 1: Schema validation
        const { isValid, errors } = validateUser(userData);

        if (!isValid) {
            return res.status(400).json({
                error: "Validation failed",
                messages: errors
            });
        }

        // Step 2: Ensure Firestore connection is ready
        if (!db) {
            return res.status(500).json({
                error: "Firestore is not initialized. Please verify service.json credentials."
            });
        }

        // Step 3: Store data in 'users' collection
        const cleanData = {
            name: userData.name.trim(),
            email: userData.email.trim(),
            age: Number(userData.age),
            course: userData.course.trim(),
            createdAt: new Date().toISOString()
        };

        const docRef = await db.collection("users").add(cleanData);

        // Step 4: Return success response
        return res.status(201).json({
            message: "User stored successfully in Firestore",
            id: docRef.id,
            user: cleanData
        });
    } catch (error) {
        console.error("Error storing user in Firestore:", error);
        return res.status(500).json({
            error: "Failed to store user in Firestore",
            details: error.message
        });
    }
});

// GET /api/users - Fetch users from Firestore (helpful for testing & verification)
router.get("/", async (req, res) => {
    try {
        if (!db) {
            return res.status(500).json({ error: "Firestore is not initialized." });
        }
        const snapshot = await db.collection("users").get();
        const users = [];
        snapshot.forEach((doc) => {
            users.push({ id: doc.id, ...doc.data() });
        });
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;
