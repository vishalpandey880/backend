const express = require("express");
const mongoose = require("mongoose");
const teacherRouter = require("./router/teacherRouter");
const studentRouter = require("./router/studentRouter");

const app = express();
const PORT = process.env.PORT || 4000;
const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost:27017/schoolDB";

// Middleware to parse incoming JSON bodies
app.use(express.json());

// Mount Routers
app.use("/teacher", teacherRouter);
app.use("/student", studentRouter);

// Root route
app.get("/", (req, res) => {
    res.send("Teacher and Student Registration API using Express.js and MongoDB");
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
