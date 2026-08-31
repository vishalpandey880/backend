const http = require("http");

const server = http.createServer((req, res) => {

    if (req.url == "/student") {

        const student = {
            id: 101,
            name: "John",
            course: "BCA",
            semester: 4,
            city: "Mumbai"
        };

        res.writeHead(200, {
            "Content-Type": "application/json"
        });

        res.end(JSON.stringify(student));

    } else {

        res.writeHead(404);
        res.end("404 - Page Not Found");

    }

});

server.listen(3000, () => {
    console.log("Server is running on http://localhost:3000");
});

