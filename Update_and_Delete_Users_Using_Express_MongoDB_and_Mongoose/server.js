const express = require("express");
const mongoose = require("mongoose");
const userRouter = require("./router/userRouter");

const app = express();
const PORT = process.env.PORT || 5000;
const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost:27017/userDB";

// Middleware to parse JSON
app.use(express.json());

// Mount User Router
app.use("/api/users", userRouter);

// Root test route
app.get("/", (req, res) => {
    res.send("Update and Delete Users API using Express, MongoDB and Mongoose");
});

// MongoDB Connection using Mongoose
mongoose
    .connect(MONGODB_URI)
    .then(() => {
        console.log("MongoDB connected successfully");
        app.listen(PORT, () => {
            console.log(`Server running at http://localhost:${PORT}`);
        });
    })
    .catch((err) => {
        console.error("MongoDB connection failed:", err.message);
    });
