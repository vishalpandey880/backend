# Assignment 12: User Registration, Login and JWT Authentication

This project implements a secure authentication system using Node.js, Express.js, MongoDB with Mongoose, bcrypt, JWT, and dotenv.

## Features

- User registration with name, email, and password
- Duplicate email validation
- Password hashing with bcrypt before storage
- Login with bcrypt password verification
- JWT generation after successful login
- Protected `GET /profile` endpoint
- Bearer token authentication middleware
- MongoDB user storage

## Technologies Used

- Node.js
- Express.js
- MongoDB and Mongoose
- bcrypt
- jsonwebtoken
- dotenv
- Postman for API testing

## Project Structure

```text
Assignment_12/
├── app.js
├── package.json
├── .env
├── .gitignore
├── middleware/
│   └── authMiddleware.js
├── models/
│   └── user.js
├── routes/
│   └── authRoutes.js
└── screenshots/
```

## Environment Variables

Create a `.env` file in the project root. Do not commit this file or expose its values.

```env
MONGO_URI=your_mongodb_atlas_connection_string
JWT_SECRET=your_secret_key
PORT=3000
```

The `.env` file is excluded by `.gitignore`.

## Installation and Setup

1. Open a terminal in the `Assignment_12` directory.
2. Install the dependencies:

```bash
npm install
```

3. Add the MongoDB connection string and JWT secret to `.env`.
4. Start the server:

```bash
node app.js
```

The API runs at `http://localhost:3000` by default.

## API Endpoints

### 1. Register a User

**Request**

```http
POST /register
Content-Type: application/json
```

```json
{
  "name": "Rahul",
  "email": "rahul@example.com",
  "password": "Rahul@123"
}
```

**Successful response: `201 Created`**

```json
{
  "message": "User registered successfully"
}
```

The password is hashed with `bcrypt.hash()` and only the hashed value is stored in MongoDB.

### 2. Login

**Request**

```http
POST /login
Content-Type: application/json
```

```json
{
  "email": "rahul@example.com",
  "password": "Rahul@123"
}
```

**Successful response: `200 OK`**

```json
{
  "message": "Login successful",
  "token": "JWT_TOKEN_HERE"
}
```

The token is generated with `jsonwebtoken` and expires after one hour.

### 3. Private Profile

**Request without a token**

```http
GET /profile
```

Response: `401 Unauthorized`

```json
{
  "message": "Unauthorized - Token missing"
}
```

**Request with a valid token**

```http
GET /profile
Authorization: Bearer JWT_TOKEN_HERE
```

**Successful response: `200 OK`**

```json
{
  "message": "Welcome to your private profile",
  "user": {
    "id": "USER_ID",
    "email": "rahul@example.com"
  }
}
```

The authentication middleware reads the `Authorization` header, extracts the Bearer token, verifies it with `JWT_SECRET`, and rejects missing or invalid tokens with `401 Unauthorized`.

## Postman Testing Evidence

### Successful Registration

![Successful registration](<screenshots/Screenshot 2026-09-22 at 8.48.52 PM.png>)

### Successful Login and JWT Token

![Successful login](<screenshots/Screenshot 2026-09-22 at 8.49.37 PM.png>)

### Profile Without a Token

![Profile without token](<screenshots/Screenshot 2026-09-22 at 8.51.51 PM.png>)

### Profile with an Invalid Token

![Profile with invalid token](<screenshots/Screenshot 2026-09-22 at 8.53.28 PM.png>)

### Profile with a Valid Token

![Profile with valid token](<screenshots/Screenshot 2026-09-22 at 8.54.17 PM.png>)

### MongoDB User Document with Hashed Password

![MongoDB hashed password](<screenshots/Screenshot 2026-09-22 at 8.55.13 PM.png>)

## Security Notes

- Plain-text passwords are never stored in the database.
- `JWT_SECRET` and the MongoDB connection string must remain private.
- The actual `.env` file must not be submitted or committed.
- Use `.env.example` with placeholder values when sharing the project.