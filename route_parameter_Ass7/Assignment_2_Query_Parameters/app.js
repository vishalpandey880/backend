const express = require("express");

const app = express();
const PORT = process.env.PORT || 3000;


app.get("/", (req, res) => {
    res.send("Assignment 2: Query Parameters. Try visiting /search?name=Ricky&course=Node.js or /search");
});


app.get("/search", (req, res) => {
    const { name, course } = req.query;

    if (!name && !course) {
        return res.send("No search data provided.");
    }

    res.send(`Name: ${name || "N/A"}<br>Course: ${course || "N/A"}`);
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
