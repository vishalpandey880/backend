# Assignment: Teacher and Student Registration Using Express.js and MongoDB

## 👨‍💻 Student Details

* **Name:** Vishal
* **Roll Number:** [150096725178]
* **Course:** Backend Development (Node.js & MongoDB)
* **Assignment:** Teacher and Student Registration Using Express.js and MongoDB

---

## 🎯 Objective

Develop an Express.js backend application connecting to MongoDB using **Mongoose** that enables separate registration workflows for **Teachers** and **Students**, enforcing schema validation and secure password hashing using **bcrypt**.

---

## 📁 Required Folder Structure

```text
Teacher_and_Student_Registration_Using_Express.js_and_MongoDB/
│
├── server.js                   # Application entry point & MongoDB connection
│
├── schema/
│   ├── teacherSchema.js        # Mongoose schema definition for Teacher
│   └── studentSchema.js        # Mongoose schema definition for Student
│
├── model/
│   ├── teacherModel.js         # Mongoose model for Teacher ('teachers' collection)
│   └── studentModel.js         # Mongoose model for Student ('students' collection)
│
├── router/
│   ├── teacherRouter.js        # Routes for POST /teacher/register
│   └── studentRouter.js        # Routes for POST /student/register
│
├── package.json
└── README.md
```

---

## 🚀 Technologies Used

* **Node.js** (Runtime)
* **Express.js** (Web framework)
* **MongoDB** (NoSQL Database)
* **Mongoose** (ODM for MongoDB)
* **bcryptjs / bcrypt** (Password hashing)

---

## ⚙️ Installation & Setup

1. **Install Dependencies:**
   ```bash
   npm install
   ```

2. **Ensure MongoDB is Running:**
   ```bash
   mongod
   ```

3. **Start the Application:**
   ```bash
   node server.js
   ```

   **Expected Terminal Output:**
   ```text
   MongoDB connected successfully
   Server is running on port 4000
   ```

---

## 📋 Schema Details

### 1. Teacher Schema (`schema/teacherSchema.js`)
* `name`: String (Required, trimmed)
* `email`: String (Required, unique, valid email format)
* `password`: String (Required, hashed with bcrypt)
* `subject`: String (Required, trimmed)

### 2. Student Schema (`schema/studentSchema.js`)
* `name`: String (Required, trimmed)
* `email`: String (Required, unique, valid email format)
* `password`: String (Required, hashed with bcrypt)
* `course`: String (Required, trimmed)
* `age`: Number (Required, between 1 and 120)

---

## 💻 API Endpoints

### 1. Register Teacher
* **Endpoint:** `POST /teacher/register`
* **URL:** `http://localhost:4000/teacher/register`
* **Headers:** `Content-Type: application/json`
* **Request Body:**
  ```json
  {
    "name": "Dr. Sharma",
    "email": "sharma@school.edu",
    "password": "secureTeacherPassword123",
    "subject": "Computer Networks"
  }
  ```
* **Success Response (`201 Created`):**
  ```json
  {
    "message": "Teacher registered successfully",
    "teacher": {
      "id": "65e01234abcd5678ef012345",
      "name": "Dr. Sharma",
      "email": "sharma@school.edu",
      "subject": "Computer Networks"
    }
  }
  ```

---

### 2. Register Student
* **Endpoint:** `POST /student/register`
* **URL:** `http://localhost:4000/student/register`
* **Headers:** `Content-Type: application/json`
* **Request Body:**
  ```json
  {
    "name": "Vishal",
    "email": "vishal@student.edu",
    "password": "studentSecretPassword456",
    "course": "Full Stack Web Development",
    "age": 21
  }
  ```
* **Success Response (`201 Created`):**
  ```json
  {
    "message": "Student registered successfully",
    "student": {
      "id": "65e09876dcba5432fe987654",
      "name": "Vishal",
      "email": "vishal@student.edu",
      "course": "Full Stack Web Development",
      "age": 21
    }
  }
  ```

---

## 🔒 Security: Password Hashing

* Passwords are **never stored in plain text**.
* Before saving to MongoDB, passwords are encrypted with **bcrypt** using 10 salt rounds:
  ```javascript
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);
  ```
* In MongoDB, the password appears as an irreversible hash string (e.g. `$2a$10$e8wF...`).
* Passwords are excluded from all API responses to prevent leakage.

---

## 📸 Required Submission Screenshots

* **1. Successful MongoDB Connection:** Terminal showing `MongoDB connected successfully`.
* **2. Teacher Registration in Postman:** Screenshot of `POST /teacher/register` returning `201 Created`.
* **3. Student Registration in Postman:** Screenshot of `POST /student/register` returning `201 Created`.
* **4. Teacher Data in MongoDB:** MongoDB Compass / Shell showing records in `teachers` collection.
* **5. Student Data in MongoDB:** MongoDB Compass / Shell showing records in `students` collection.
* **6. Passwords Stored in Hashed Form:** Screenshot in MongoDB Compass demonstrating bcrypt `$2a$...` hash strings.

---

## 📊 Rubric Alignment (10 Marks)

| Criteria | Description | Marks |
| :--- | :--- | :---: |
| **MongoDB Connection** | Successfully connects Express.js with MongoDB using Mongoose | 1 |
| **Folder Structure** | Creates separate `schema/`, `model/`, and `router/` files for teacher and student | 2 |
| **Teacher Registration** | Correctly implements teacher schema and `POST /teacher/register` | 2 |
| **Student Registration** | Correctly implements student schema and `POST /student/register` | 2 |
| **Validation** | Properly validates teacher and student registration fields | 1 |
| **Password Hashing** | Hashes passwords using bcrypt before saving to MongoDB | 1 |
| **Code Quality & Screenshots** | Clean, modular code with complete documentation and screenshot guide | 1 |
| **Total** | | **10 Marks** |
