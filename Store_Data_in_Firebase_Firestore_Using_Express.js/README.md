# Assignment: Store Data in Firebase Firestore Using Express.js

## 👨‍💻 Student Details

* **Name:** Vishal
* **Roll Number:** [150096725178]
* **Course:** Backend Development (Node.js & Firebase)
* **Assignment:** Store Data in Firebase Firestore Using Express.js

---

## 🎯 Objective

Create an Express.js application that accepts user data through a `POST` request, performs strict **schema validation**, and stores valid records into a Google **Firebase Firestore** collection named `users`.

---

## 📁 Required Folder Structure

```text
Store_Data_in_Firebase_Firestore_Using_Express.js/
│
├── server.js               # Entry point and Express server
│
├── config/
│   ├── firebase.js         # Firebase Admin SDK initialization & Firestore instance
│   └── service.json        # Firebase Service Account key file
│
├── schema/
│   └── userSchema.js       # User schema validation rules
│
├── router/
│   └── userRouter.js       # Express router for /api/users
│
├── package.json
└── README.md
```

---

## 🚀 Technologies Used

* **Node.js** (JavaScript Runtime)
* **Express.js** (Web Framework)
* **Firebase Admin SDK** (`firebase-admin`)
* **Google Cloud Firestore** (NoSQL Document Database)

---

## ⚙️ Installation & Setup

1. **Install Dependencies:**
   ```bash
   npm install
   ```

2. **Firebase Service Account Configuration:**
   * Ensure your `service.json` private key file is placed inside the `config/` directory.

3. **Start the Server:**
   ```bash
   node server.js
   ```

   **Expected Terminal Output:**
   ```text
   Firebase connected successfully
   Server running at http://localhost:6000
   ```

---

## 📋 Schema Validation Requirements

The application validates every incoming request in `schema/userSchema.js`:

| Field | Type | Validation Rules |
| :--- | :--- | :--- |
| `name` | String | **Required**, non-empty string |
| `email` | String | **Required**, valid email format (`name@domain.ext`) |
| `age` | Number | **Required**, valid numeric value between `1` and `120` |
| `course` | String | **Required**, non-empty string |

---

## 💻 API Endpoints

### 1. Store User Data (Valid Request)
* **Method:** `POST`
* **URL:** `http://localhost:6000/api/users`
* **Headers:** `Content-Type: application/json`
* **Request Body:**
  ```json
  {
    "name": "Vishal",
    "email": "vishal@example.com",
    "age": 22,
    "course": "Node.js & Cloud Computing"
  }
  ```
* **Success Response (`201 Created`):**
  ```json
  {
    "message": "User stored successfully in Firestore",
    "id": "7wA89BqZ1xK0L3mP4",
    "user": {
      "name": "Vishal",
      "email": "vishal@example.com",
      "age": 22,
      "course": "Node.js & Cloud Computing",
      "createdAt": "2026-09-10T01:00:00.000Z"
    }
  }
  ```

---

### 2. Validation Failure (Invalid Request)
* **Request Body Example:**
  ```json
  {
    "name": "",
    "email": "invalid-email",
    "age": -5
  }
  ```
* **Error Response (`400 Bad Request`):**
  ```json
  {
    "error": "Validation failed",
    "messages": [
      "Name is required and must be a non-empty string.",
      "Email is required and must be a valid email address.",
      "Age is required and must be a valid number between 1 and 120.",
      "Course is required and must be a non-empty string."
    ]
  }
  ```

---

## 📸 Required Submission Screenshots

* **1. Successful Firebase Connection:** Terminal showing `Firebase connected successfully`.
* **2. Successful POST Request:** Postman / REST Client showing `POST /api/users` with `201 Created`.
* **3. Data Stored in Firestore:** Firebase Console showing the `users` collection with the newly created document.
* **4. Validation Error:** Postman showing `400 Bad Request` when required fields are missing or invalid.

---

## 📊 Rubric Alignment (10 Marks)

| Criteria | Marks | Implementation |
| :--- | :---: | :--- |
| **Firebase Connection** | 2 | Initializes Firebase Admin SDK with service account credentials and logs connection status |
| **Folder Structure** | 1 | Strictly follows `config/`, `schema/`, `router/`, and `server.js` |
| **Schema Validation** | 2 | Validates `name`, `email`, `age`, and `course` with detailed error feedback |
| **POST API** | 1 | Implements `POST /api/users` endpoint properly |
| **Firestore Storage** | 2 | Adds validated user document into the `users` collection |
| **Error Handling** | 1 | Handles validation errors and Firebase connection issues cleanly |
| **Code Quality** | 1 | Clean, modular, well-commented, and production-ready code |
| **Total** | **10 Marks** | |
