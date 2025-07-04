# AI-image-generator
A full-stack AI-powered image generation web application using the Clipdrop API. This app allows users to generate images based on text prompts. The platform features secure authentication and authorization using JWT, a scalable MongoDB Atlas database, and a modern frontend built with React, Next.js, and Tailwind CSS.

## Features
- Generate images with AI using Clipdrop API
- JWT-based user authentication and authorization
- MongoDB Atlas for cloud database storage
- Responsive UI with Tailwind CSS and Framer Motion
- Real-time feedback with React Toastify
- Component-based architecture with React and Next.js
- REST API backend built using Node.js and Express

## Tech Stack
### Frontend:
- React
- Next.js
- Tailwind CSS
- Framer Motion
- React Toastify
- React DOM
### Backend:
- Node.js
- Express.js
- MongoDB (Atlas)
- Nodemon

## Getting Started
1. Clone the repository
```
git clone https://github.com/anushkaxag/AI-image-generator.git
cd AI-image-generator
```
2. Start Frontend/Client
```
cd client
npm install
npm run dev
```
3. Start Backend/Server
```
cd ../server
npm install
npm run server
```
4. Access the Application <br/>
Go to http://localhost:5173/

## Note:
Make sure to configure the `.env` files:
- Go to Server directory and create a .env file for enviornment variables
```
MONGODB_URI = (MongoDB Atlas URI)
JWT_SECRET = 'adfg'
CLIPDROP_API = (Clipdrop API)
```
