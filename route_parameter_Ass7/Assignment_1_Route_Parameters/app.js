const express = require("express");

const app = express();
const PORT = process.env.PORT || 3000;


app.get("/", (req, res) => {
    res.send("Assignment 1: Route Parameters. Try visiting /student/101 or /student/205");
});

app.get("/student/:id", (req, res) => {
    const { id } = req.params;
    res.send(`Student ID: ${id}`);
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
