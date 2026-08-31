const http = require("http");

const server = http.createServer((req, res) => {

    if (req.url == "/") {

        res.end(
            "HOME\n" +
            "Welcome to my personal portfolio."
        );

    } else if (req.url == "/about") {

        res.end(
            "ABOUT ME\n" +
            "Hello! I am a student learning Node.js and web development."
        );

    } else if (req.url == "/skills") {

        res.end(
            "SKILLS\n" +
            "HTML\n" +
            "CSS\n" +
            "JavaScript\n" +
            "Node.js"
        );

    } else if (req.url == "/projects") {

        res.end(
            "PROJECTS\n" +
            "1. Student Management System\n" +
            "2. Personal Portfolio\n" +
            "3. Node.js Web Server"
        );

    } else if (req.url == "/contact") {

        res.end(
            "CONTACT DETAILS\n" +
            "Email: example@gmail.com\n" +
            "Phone: 9876543210"
        );

    } else {

        res.writeHead(404);
        res.end("404 - Page Not Found");

    }

});

server.listen(3000, () => {
    console.log("Server is running on http://localhost:3000");
});