# 📝 Simple To-Do CRUD API

A lightweight **Node.js + Express** REST API to manage to-do items.  
It demonstrates complete CRUD operations (Create, Read, Update, Delete) with data stored locally in a **JSON file** — no external database needed.

---

Postman API - https://sahilahmed0029-3594081.postman.co/workspace/Sahil-Ahmed's-Workspace~507292b8-beec-4de7-81da-d9594af9042c/collection/47691689-6736a4d4-595e-42b9-9ec4-7cd8ddda43d1?action=share&creator=47691689

## 🚀 Features

✅ CRUD APIs for managing todos  
✅ Input validation middleware  
✅ JSON-based local data persistence  
✅ Clear success/error messages with data  
✅ Auto-generates sample todos on first run  
✅ Deployable on Render / Railway  

---

## 📁 Folder Structure

todo-api/
│
├── data/
│ └── todos.json # Local data storage
│
├── routes/
│ └── todos.js # All API route logic
│
├── middleware/
│ └── validateTodo.js # Middleware for validation
│
├── app.js # Main entry point
├── package.json # Dependencies & scripts
└── README.md # Project documentation

yaml
Copy code

---

## ⚙️ Setup Instructions

### 1️⃣ Clone the repository
```bash
git clone https://github.com/<your-username>/todo-api.git
cd todo-api
2️⃣ Install dependencies
bash
Copy code
npm install
3️⃣ Run the API
bash
Copy code
npm run dev
4️⃣ Server starts at:
arduino
Copy code
http://localhost:5000
🧠 Sample Data (auto-generated)
If no todos.json exists, the app auto-creates one with:

json
Copy code
[
  { "id": 1, "title": "Buy groceries", "completed": false },
  { "id": 2, "title": "Finish the React project", "completed": true },
  { "id": 3, "title": "Go for a walk", "completed": false }
]
📡 API Endpoints
Method	Endpoint	Description	Request Body	Example Response
GET	/todos	Get all todos	❌ None	json [ { "id": 1, "title": "Buy groceries", "completed": false } ]
POST	/todos	Create a new todo	json { "title": "Learn Express", "completed": false }	json { "message": "✅ New todo created successfully!", "todo": { "id": 123, "title": "Learn Express", "completed": false } }
PUT	/todos/:id	Update a todo by ID	json { "title": "Buy fruits", "completed": true }	json { "message": "✅ Todo updated successfully!", "updatedTodo": { "id": 1, "title": "Buy fruits", "completed": true } }
DELETE	/todos/:id	Delete a todo by ID	❌ None	json { "message": "🗑️ Todo deleted successfully!", "deletedTodo": { "id": 1, "title": "Buy fruits", "completed": true } }

🧩 Validation Rules
Field	Type	Required	Description
title	string	✅ Yes	Task name or description
completed	boolean	❌ Optional	Task completion status

If validation fails:

json
Copy code
{ "error": "Title is required and must be a string" }
🧾 Example cURL Commands
bash
Copy code
# Get all todos
curl -X GET http://localhost:5000/todos

# Create a new todo
curl -X POST http://localhost:5000/todos \
  -H "Content-Type: application/json" \
  -d '{"title": "Learn Express.js"}'

# Update a todo
curl -X PUT http://localhost:5000/todos/1 \
  -H "Content-Type: application/json" \
  -d '{"title": "Buy groceries and snacks", "completed": true}'

# Delete a todo
curl -X DELETE http://localhost:5000/todos/1
🧠 Example API Responses
✅ GET /todos
json
Copy code
[
  { "id": 1, "title": "Buy groceries", "completed": false },
  { "id": 2, "title": "Finish the React project", "completed": true }
]
✅ POST /todos
json
Copy code
{
  "message": "✅ New todo created successfully!",
  "todo": {
    "id": 1698354902295,
    "title": "Learn Express.js",
    "completed": false
  }
}
✅ PUT /todos/:id
json
Copy code
{
  "message": "✅ Todo updated successfully!",
  "updatedTodo": {
    "id": 1,
    "title": "Buy groceries and fruits",
    "completed": true
  }
}
✅ DELETE /todos/:id
json
Copy code
{
  "message": "🗑️ Todo deleted successfully!",
  "deletedTodo": {
    "id": 1,
    "title": "Buy groceries and fruits",
    "completed": true
  }
}
🌐 Deployment Guide
🚀 Deploy on Render
Push your code to GitHub.

Go to Render.com → New Web Service.

Connect your GitHub repo.

Configure:

Build Command: npm install

Start Command: npm start

Deploy → Render assigns a live URL:

arduino
Copy code
https://<your-app-name>.onrender.com/todos
🌍 Deploy on Railway
Go to Railway.app.

Click New Project → Deploy from GitHub Repo.

Connect your GitHub repository.

Railway auto-detects Node.js and runs:

sql
Copy code
npm install
npm start
Once deployed:

arduino
Copy code
https://<your-project>.up.railway.app/todos
⚙️ Environment Variables
Variable	Default	Description
PORT	5000	The port the server listens on

You can override this during deployment (Render/Railway auto-assigns one).

🧑‍💻 Tech Stack
Node.js — JavaScript runtime

Express.js — Web framework

Body Parser — Parses JSON request bodies

File System (fs) — Stores todos in JSON file