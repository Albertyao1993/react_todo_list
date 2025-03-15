# React Todo List Application

A full-stack Todo List application built with React, TypeScript, and Express.js. This project demonstrates a modern web application with a RESTful API backend and a responsive frontend.

## Features

- **Frontend (React + TypeScript)**
  - Responsive UI with modern design
  - Task management (create, read, update, delete)
  - Task status toggling
  - Error handling and loading states
  - Form validation
  - Enter key support for adding tasks

- **Backend (Express + MongoDB)**
  - RESTful API for task management
  - MongoDB database integration
  - Data validation
  - Error handling
  - Proper HTTP status codes

## Tech Stack

### Frontend
- React 18
- TypeScript
- React Router for navigation
- Axios for API requests
- Vite as build tool
- CSS for styling

### Backend
- Node.js
- Express.js
- MongoDB with Mongoose
- TypeScript
- CORS support

## Project Structure

```
react_todo_list/
├── client/               # Frontend React application
│   ├── src/
│   │   ├── components/   # Reusable UI components
│   │   ├── pages/        # Page components
│   │   ├── services/     # API services
│   │   └── ...
│   └── ...
├── server/               # Backend Express application
│   ├── src/
│   │   ├── controllers/  # Route controllers
│   │   ├── models/       # Database models
│   │   └── ...
│   └── ...
└── ...
```

## Installation and Setup

### Prerequisites
- Node.js (v14 or later)
- npm or yarn
- MongoDB (local or Atlas)

### Backend Setup
1. Navigate to the server directory:
   ```
   cd server
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Create a `.env` file in the server directory with the following variables:
   ```
   PORT=5001
   MONGO_URI=mongodb://localhost:27017/todo_app
   ```
   Note: Adjust the MongoDB URI as needed for your environment.

4. Start the server:
   ```
   npm run dev
   ```
   The server will run on http://localhost:5001

### Frontend Setup
1. Navigate to the client directory:
   ```
   cd client
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Start the development server:
   ```
   npm run dev
   ```
   The application will be available at http://localhost:5173

## API Endpoints

The backend provides the following RESTful API endpoints:

### Tasks

| Method | Endpoint         | Description           | Request Body                  | Response                  |
|--------|------------------|-----------------------|------------------------------|---------------------------|
| GET    | /api/v1/tasks    | Get all tasks         | -                            | Array of task objects     |
| POST   | /api/v1/tasks    | Create a new task     | `{ title: string }`          | Created task object       |
| PUT    | /api/v1/tasks/:id | Update a task         | `{ title?: string, completed?: boolean }` | Updated task object |
| DELETE | /api/v1/tasks/:id | Delete a task         | -                            | Deleted task object       |

## Task Object Structure

```json
{
  "_id": "60f7b0b9e6c7a83b3c3f3b3c",
  "title": "Task title",
  "completed": false,
  "createdAt": "2023-03-15T12:00:00.000Z"
}
```

## Running in Production

### Building the Frontend
```
cd client
npm run build
```

### Building the Backend
```
cd server
npm run build
```

### Deployment
The application can be deployed to various platforms such as:
- Heroku
- Vercel
- Netlify (frontend)
- AWS
- Digital Ocean

## Future Improvements

- User authentication
- Task categories/tags
- Due dates for tasks
- Task priority levels
- Dark/light theme toggle
- Mobile app using React Native

## License

MIT

## Author

Your Name
