const http = require("http");

const server = http.createServer((req, res) => {

    res.end(
        "Student Portal\n" +
        "Name: John Doe\n" +
        "Course: Full Stack Development\n" +
        "College: XYZ College\n" +
        "Welcome to our Node.js application."
    );

});

server.listen(3000, () => {
    console.log("Server is running on http://localhost:3000");
});

