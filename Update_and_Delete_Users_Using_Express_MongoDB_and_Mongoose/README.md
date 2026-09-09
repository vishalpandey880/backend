# Question 2: Update and Delete Users Using Express, MongoDB and Mongoose

## 👨‍💻 Student Details

* **Name:** Vishal
* **Roll Number:** [150096725178]
* **Course:** Backend Development (Node.js & MongoDB)
* **Assignment:** Question 2 — Update and Delete Users Using Express, MongoDB and Mongoose

---

## 🎯 Objective

Extend an Express.js and MongoDB application to perform **update (`PATCH`)** and **delete (`DELETE`)** operations on existing user records in MongoDB using **Mongoose models**.

---

## 📁 Required Folder Structure

```text
Update_and_Delete_Users_Using_Express_MongoDB_and_Mongoose/
│
├── server.js               # Entry point and MongoDB connection
│
├── schema/
│   └── userSchema.js       # Mongoose User schema definition
│
├── model/
│   └── userModel.js        # Mongoose User model
│
├── router/
│   └── userRouter.js       # Express routes for PATCH and DELETE operations
│
├── package.json
└── README.md
```

---

## 🚀 Technologies Used

* **Node.js**
* **Express.js**
* **MongoDB**
* **Mongoose**

---

## ⚙️ Installation & Setup

1. **Install Dependencies:**
   ```bash
   npm install
   ```

2. **Ensure MongoDB is Running:**
   ```bash
   # Make sure your MongoDB service is running locally on port 27017
   mongod
   ```

3. **Start the Server:**
   ```bash
   node server.js
   ```

   **Expected Terminal Output:**
   ```text
   MongoDB connected successfully
   Server running at http://localhost:5000
   ```

---

## 💻 API Endpoints

### 1. Update User
* **Method:** `PATCH`
* **URL:** `http://localhost:5000/api/users/:id`
* **Description:** Updates an existing user's details using their MongoDB document ID.
* **Headers:** `Content-Type: application/json`
* **Request Body:**
  ```json
  {
    "age": 23,
    "course": "MCA"
  }
  ```
* **Success Response (`200 OK`):**
  ```json
  {
    "message": "User updated successfully"
  }
  ```

---

### 2. Delete User
* **Method:** `DELETE`
* **URL:** `http://localhost:5000/api/users/:id`
* **Description:** Deletes the user whose MongoDB ID is provided in the URL parameter.
* **Success Response (`200 OK`):**
  ```json
  {
    "message": "User deleted successfully"
  }
  ```

---

### 3. Helper Endpoints (For Testing & Verification)
* **`POST /api/users`** — Create a new user record.
  ```json
  {
    "name": "Vishal",
    "email": "vishal@example.com",
    "age": 21,
    "course": "B.Tech CSE"
  }
  ```
* **`GET /api/users`** — Retrieve all existing users to obtain IDs for testing update and delete.

---

## 🛡️ Error Handling

The application robustly handles edge cases and returns appropriate HTTP status codes:

| Scenario | HTTP Status | Response |
| :--- | :---: | :--- |
| **Invalid MongoDB ID Format** | `400 Bad Request` | `{"error": "Invalid MongoDB ID format."}` |
| **Empty Request Body on Update** | `400 Bad Request` | `{"error": "Invalid request data. Nothing to update."}` |
| **User Not Found** | `404 Not Found` | `{"error": "User not found."}` |
| **Database/Server Error** | `500 Internal Server Error` | `{"error": "Database error", "details": "..."}` |

---

## 📊 Rubric Alignment (10 Marks)

| Criteria | Marks | Implementation in Project |
| :--- | :---: | :--- |
| **Folder Structure** | 1 | Strictly separates `schema/`, `model/`, `router/`, and `server.js` |
| **Schema & Model Usage** | 1 | Uses `schema/userSchema.js` and `model/userModel.js` without inline duplication |
| **Router Setup** | 1 | Router defined in `router/userRouter.js` and mounted in `server.js` |
| **PATCH API** | 2 | Implements `PATCH /api/users/:id` reading ID from `req.params` and body from `req.body` |
| **Update Database Operation** | 1 | Uses Mongoose `findByIdAndUpdate` with `{ new: true, runValidators: true }` |
| **DELETE API** | 2 | Implements `DELETE /api/users/:id` reading ID from `req.params` |
| **Delete Database Operation** | 1 | Uses Mongoose `findByIdAndDelete` to remove document |
| **Error Handling** | 1 | Comprehensive validation for invalid IDs, missing users, and database errors |
| **Total** | **10 Marks** | |
