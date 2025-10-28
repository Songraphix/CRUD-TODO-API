# ✅ CRUD Todo API

A simple and functional RESTful API built with **Express.js** that allows users to create and manage Todo tasks.  
This project was built as part of the **Backend Development - Week 3 CRUD API Challenge**.

---

## 🚀 Features

✔ Create new todos  
✔ View all todos  
✔ View only active todos  
✔ View completed todos  
✔ Update a todo  
✔ Mark a todo as completed  
✔ Delete a todo  

---

## 🛠 Tech Stack

| Technology | Purpose |
|-----------|---------|
| Node.js | Runtime environment |
| Express.js | Backend framework |
| JSON file / Database | Data storage for todos |
| Postman | API testing |

---

## 📌 API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/todos` | Get all todos |
| GET | `/todos/active` | Get only active todos |
| GET | `/todos/completed` | Get only completed todos |
| GET | `/todos/:id` | Get a single todo |
| POST | `/todos` | Create a new todo |
| PUT | `/todos/:id` | Update a todo |
| PATCH | `/todos/:id` | Mark todo as completed |
| DELETE | `/todos/:id` | Delete a todo |

---

## 🔧 How to Run the Project

Make sure you have Node.js installed.

```bash
# Clone this repository
git clone https://github.com/Songraphix/CRUD-TODO-API.git

# Navigate to project folder
cd CRUD-TODO-API

# Install dependencies
npm install

# Run the app
npm start
