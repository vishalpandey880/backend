# Express.js Middleware Assignments

This repository contains three Express.js assignments demonstrating different types of middleware and their implementation.

## 📚 Assignments

| Assignment   | Topic                     | Main Concept              |
| ------------ | ------------------------- | ------------------------- |
| Assignment 1 | Router-Level Middleware   | `express.Router()`        |
| Assignment 2 | Request Logger Middleware | Global Middleware         |
| Assignment 3 | Response Time Middleware  | Response Time Measurement |

---

# 🚀 Technologies Used

* Node.js
* Express.js
* JavaScript
* npm

---

# 📋 Prerequisites

Before running the projects, make sure you have installed:

* [Node.js](https://nodejs.org/)
* npm

Check the installation:

```bash
node -v
npm -v
```

---

# 📁 Project Structure

```text
Express-Middleware/
│
├── Assignment1/
│   ├── app.js
│   └── package.json
│
├── Assignment2/
│   ├── app.js
│   └── package.json
│
└── Assignment3/
    ├── app.js
    └── package.json
```

---

# 1️⃣ Assignment 1 — Router-Level Middleware

## 🎯 Objective

Implement router-level middleware using Express Router.

## 📝 Description

This assignment creates a separate Express Router and a custom middleware named `routerLogger`.

The middleware logs:

* HTTP Method
* Request URL
* Current Date & Time

The router contains three routes:

```text
/api/students
/api/courses
/api/faculty
```

The router is mounted using:

```javascript
app.use("/api", router);
```

The middleware executes only for routes belonging to this router.

## 💻 Routes

| Method | Route           | Response      |
| ------ | --------------- | ------------- |
| GET    | `/api/students` | Students List |
| GET    | `/api/courses`  | Courses List  |
| GET    | `/api/faculty`  | Faculty List  |

## ▶️ Run

```bash
cd Assignment1
npm install
node app.js
```

Server:

```text
http://localhost:3000
```

## 🌐 Browser Output

### Students

```text
http://localhost:3000/api/students
```

Response:

```text
Students List
```

### Courses

```text
http://localhost:3000/api/courses
```

Response:

```text
Courses List
```

### Faculty

```text
http://localhost:3000/api/faculty
```

Response:

```text
Faculty List
```

## 🖥️ Terminal Output

Example:

```text
GET /students 9/7/2026, 10:30:45 AM
GET /courses 9/7/2026, 10:31:20 AM
GET /faculty 9/7/2026, 10:32:10 AM
```

---

# 2️⃣ Assignment 2 — Request Logger Middleware

## 🎯 Objective

Create a custom middleware that logs every incoming request.

## 📝 Description

This assignment creates a custom middleware named `logger`.

The middleware logs:

* HTTP Method
* Request URL
* Current Date & Time

The middleware is applied globally using:

```javascript
app.use(logger);
```

Therefore, it executes before every route.

## 💻 Routes

| Method | Route      | Response             |
| ------ | ---------- | -------------------- |
| GET    | `/`        | Welcome to Home Page |
| GET    | `/about`   | About Us             |
| GET    | `/contact` | Contact Information  |

## ▶️ Run

```bash
cd Assignment2
npm install
node app.js
```

## 🌐 Browser Output

### Home

```text
http://localhost:3000/
```

Response:

```text
Welcome to Home Page
```

### About

```text
http://localhost:3000/about
```

Response:

```text
About Us
```

### Contact

```text
http://localhost:3000/contact
```

Response:

```text
Contact Information
```

## 🖥️ Terminal Output

Example:

```text
GET / 9/7/2026, 10:30:45 AM
GET /about 9/7/2026, 10:31:20 AM
GET /contact 9/7/2026, 10:32:10 AM
```

---

# 3️⃣ Assignment 3 — Response Time Middleware

## 🎯 Objective

Measure the time taken to process each request using middleware.

## 📝 Description

This assignment creates a custom middleware named `responseTimeLogger`.

The middleware:

1. Records the request start time.
2. Processes the request.
3. Calculates the total response time.
4. Displays the response time in milliseconds.

The response time is calculated using:

```javascript
Date.now()
```

## 💻 Routes

| Method | Route       | Response     |
| ------ | ----------- | ------------ |
| GET    | `/`         | Home Page    |
| GET    | `/products` | Product List |
| GET    | `/users`    | User List    |

## ▶️ Run

```bash
cd Assignment3
npm install
node app.js
```

## 🌐 Browser Output

### Home

```text
http://localhost:3000/
```

Response:

```text
Home Page
```

### Products

```text
http://localhost:3000/products
```

Response:

```text
Product List
```

### Users

```text
http://localhost:3000/users
```

Response:

```text
User List
```

## 🖥️ Terminal Output

Example:

```text
GET / - 4 ms
GET /products - 6 ms
GET /users - 3 ms
```

> The actual response time may be different depending on the computer and server performance.

---

# 🔑 Important Express.js Concepts

## Express Router

`express.Router()` is used to create a separate router for handling related routes.

```javascript
const router = express.Router();
```

## Middleware

Middleware functions execute during the request-response cycle.

A middleware generally uses:

```javascript
function middleware(req, res, next) {
    // middleware code

    next();
}
```

## `app.use()`

`app.use()` is used to register middleware with the Express application.

Example:

```javascript
app.use(logger);
```

## `router.use()`

`router.use()` applies middleware to routes inside a specific router.

Example:

```javascript
router.use(routerLogger);
```

## `req.method`

Returns the HTTP method of the request.

Example:

```javascript
req.method
```

Possible values:

```text
GET
POST
PUT
PATCH
DELETE
```

## `req.url`

Returns the URL requested by the client.

Example:

```javascript
req.url
```

## `next()`

`next()` passes control to the next middleware or route handler.

Example:

```javascript
next();
```

## `Date.now()`

`Date.now()` returns the current time in milliseconds.

It can be used to calculate response time:

```javascript
const startTime = Date.now();

// process request

const responseTime = Date.now() - startTime;
```

---

# ⚙️ Installation

If Express is not installed, run:

```bash
npm install express
```

Or initialize a new Node.js project:

```bash
npm init -y
npm install express
```

---

# ▶️ Running the Assignments

Each assignment can be executed separately.

### Assignment 1

```bash
cd Assignment1
node app.js
```

### Assignment 2

```bash
cd Assignment2
node app.js
```

### Assignment 3

```bash
cd Assignment3
node app.js
```

Then open the required URL in your browser.

---

# 📖 Concepts Covered

* Express.js
* Express Router
* Router-Level Middleware
* Global Middleware
* Custom Middleware
* `app.use()`
* `router.use()`
* `req.method`
* `req.url`
* `next()`
* `Date.now()`
* Request Lifecycle
* Response Time Measurement

---

# ✅ Conclusion

These assignments demonstrate how middleware works in Express.js.

The first assignment demonstrates router-level middleware, the second demonstrates global request logging middleware, and the third demonstrates how middleware can be used to measure request processing time.

Together, these assignments provide practical experience with Express.js middleware and the request-response lifecycle.

---

## 👨‍💻 Author

**Student Express.js Middleware Assignment**

---

## ⭐ Acknowledgement

This project was created as part of an Express.js middleware assignment for learning and practicing Node.js and Express.js concepts.
