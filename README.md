# Accentrex Web Project Documentation

## Project Overview
Accentrex Web is a full-stack web application with a React frontend and an Express/Sequelize backend. It provides a modular structure for rapid development, including a health check API and user management features. This guide will help developers set up, run, and contribute to the project.

---

## Directory Structure

```
accentrex_web/
├── client/                # Frontend (React + Vite)
│   ├── public/
│   ├── src/
│   │   ├── assets/
│   │   ├── components/
│   │   ├── pages/
│   │   │   ├── homepage.jsx
│   │   │   ├── health.jsx
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   └── styles/
│   ├── package.json
│   └── vite.config.js
├── server/                # Backend (Express + Sequelize)
│   ├── src/
│   │   ├── models/
│   │   │   └── user.js
│   │   ├── routes/
│   │   │   └── health.js
│   │   └── app.js
│   ├── config/
│   │   └── db.js
│   ├── package.json
│   ├── .env.example
│   └── index.js
└── README.md
```

---

## Technologies Used
- **Frontend:** React, Vite, Axios, React Router
- **Backend:** Express, Sequelize, MySQL2
- **Dev Tools:** Nodemon, dotenv

---

## Installation & Setup

### Prerequisites
- Node.js & npm
- MySQL (e.g., via XAMPP)

### Backend Setup
1. Copy `.env.example` to `.env` and fill in your database credentials.
2. Install dependencies:
   ```bash
   cd server
   npm install
   ```
3. Start the backend (auto-restart on changes):
   ```bash
   npm run dev
   ```
   Or for production:
   ```bash
   npm start
   ```

### Frontend Setup
1. Install dependencies:
   ```bash
   cd client
   npm install
   ```
2. Start the frontend:
   ```bash
   npm run dev
   ```

---

## How to Run the Project
- Start the backend server first (`npm run dev` in `server/`).
- Start the frontend (`npm run dev` in `client/`).
- Access the app at `http://localhost:5173` (default Vite port).

---

## API Endpoints

### Health Check
- **GET** `/api/health`
  - **Response:** `{ status: "OK" }`

### User Example (expand as needed)
- **GET** `/api/users`
- **POST** `/api/users`
- **Request/Response:** JSON
- **Authentication:** None by default (add middleware as needed)

---

## Environment Variables
See `.env.example` for required variables:
```
DB_HOST=localhost
DB_USER=root
DB_PASS=
DB_NAME=accentrex
```

---

## Developer Notes & Contribution
- Use feature branches for new work (e.g., `dev`, `feature/xyz`).
- Backend auto-restarts with `nodemon`.
- Use React Router for frontend navigation.
- API requests from frontend should use `/api/...` (Vite proxy forwards to backend).
- Add new routes in `server/src/routes/` and import them in `app.js`.
- Keep components modular and organized in `client/src/components/` and `client/src/pages/`.
- For database changes, update models in `server/src/models/`.
- Pull requests and code reviews are encouraged for collaboration.

---

## Getting Started
1. Clone the repository.
2. Set up `.env` and install dependencies.
3. Start backend and frontend servers.
4. Begin development and contribute!

For questions or help, see comments in code or contact the project maintainer.
