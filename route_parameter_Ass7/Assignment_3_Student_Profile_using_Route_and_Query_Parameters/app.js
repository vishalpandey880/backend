const express = require("express");

const app = express();
const PORT = process.env.PORT || 3000;


app.get("/", (req, res) => {
    res.send("Assignment 3: Route Parameters & Query Parameters. Try visiting /student/101?name=John&course=FullStack");
});


app.get("/student/:id", (req, res) => {
    const { id } = req.params;
    const { name, course } = req.query;

    res.send(`Student ID: ${id}<br>Name: ${name || "N/A"}<br>Course: ${course || "N/A"}`);
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
