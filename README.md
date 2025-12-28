# Trekkers Heaven

A comprehensive MERN stack travel planning application.

## Project Structure

```
/client          - React frontend (Vite)
/server          - Node.js/Express backend
```

## Tech Stack

### Frontend
- React (Vite)
- React Router
- Axios
- React Icons
- Google Maps JavaScript API

### Backend
- Node.js
- Express.js
- MongoDB Atlas
- JWT Authentication
- bcrypt

## Setup Instructions

### Backend Setup

1. Navigate to server directory:
```bash
cd server
```

2. Install dependencies:
```bash
npm install
```

3. Create `.env` file in `server/` directory:
```env
PORT=5000
MONGODB_URI=your_mongodb_atlas_connection_string
JWT_SECRET=your_jwt_secret_key_here
NODE_ENV=development
```

4. Start the server:
```bash
npm start
# or for development with auto-reload
npm run dev
```

### Frontend Setup

1. Navigate to client directory:
```bash
cd client
```

2. Install dependencies:
```bash
npm install
```

3. Create `.env` file in `client/` directory:
```env
VITE_API_URL=http://localhost:5000/api
VITE_GOOGLE_MAPS_API_KEY=your_google_maps_api_key
```

4. Start the development server:
```bash
npm run dev
```

## Features

- User Authentication (Register/Login)
- User Dashboard
- Accommodation Management (CRUD)
- Flight Management (CRUD)
- Itinerary Management (CRUD)
- Travel Blogs (Public visibility, owner can edit/delete)
- Google Maps Integration
- Responsive Design

## API Endpoints

### Auth
- POST `/api/auth/register` - Register new user
- POST `/api/auth/login` - Login user
- GET `/api/auth/me` - Get current user (protected)

### Accommodations
- GET `/api/accommodations` - Get all user accommodations (protected)
- GET `/api/accommodations/:id` - Get accommodation by ID (protected)
- POST `/api/accommodations` - Create accommodation (protected)
- PUT `/api/accommodations/:id` - Update accommodation (protected)
- DELETE `/api/accommodations/:id` - Delete accommodation (protected)

### Flights
- GET `/api/flights` - Get all user flights (protected)
- GET `/api/flights/:id` - Get flight by ID (protected)
- POST `/api/flights` - Create flight (protected)
- PUT `/api/flights/:id` - Update flight (protected)
- DELETE `/api/flights/:id` - Delete flight (protected)

### Itineraries
- GET `/api/itineraries` - Get all user itineraries (protected)
- GET `/api/itineraries/:id` - Get itinerary by ID (protected)
- POST `/api/itineraries` - Create itinerary (protected)
- PUT `/api/itineraries/:id` - Update itinerary (protected)
- DELETE `/api/itineraries/:id` - Delete itinerary (protected)

### Blogs
- GET `/api/blogs/public` - Get all public blogs
- GET `/api/blogs` - Get user's blogs (protected)
- GET `/api/blogs/:id` - Get blog by ID
- POST `/api/blogs` - Create blog (protected)
- PUT `/api/blogs/:id` - Update blog (protected)
- DELETE `/api/blogs/:id` - Delete blog (protected)

## Deployment

- Frontend: Deploy to Netlify
- Backend: Deploy to Render

Make sure to update environment variables in your deployment platforms.

