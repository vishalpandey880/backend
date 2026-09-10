const express = require("express");
const mongoose = require("mongoose");
const userRouter = require("./router/userRouter");

const app = express();
const PORT = process.env.PORT || 3000;
const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost:27017/assignment8DB";

// Middleware to parse JSON
app.use(express.json());

// Mount User Router
app.use("/api", userRouter);

// Root route
app.get("/", (req, res) => {
    res.send("Assignment 8: Create and Retrieve Users Using Express, MongoDB and Mongoose");
});

// Connect to MongoDB using Mongoose
mongoose
    .connect(MONGODB_URI)
    .then(() => {
        console.log("MongoDB connected successfully");
        app.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}`);
        });
    })
    .catch((error) => {
        console.error("MongoDB connection failed:", error.message);
    });
