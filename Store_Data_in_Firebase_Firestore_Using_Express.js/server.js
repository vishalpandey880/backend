const express = require("express");
require("./config/firebase"); // Initializes Firebase and logs connection
const userRouter = require("./router/userRouter");

const app = express();
const PORT = process.env.PORT || 6000;

// Body parser middleware
app.use(express.json());

// Mount User router
app.use("/api/users", userRouter);

// Root route
app.get("/", (req, res) => {
    res.send("Firebase Firestore User Storage API using Express.js");
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
