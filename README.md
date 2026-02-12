# 🌍 TravelNest

TravelNest is a full-stack web application that allows users to explore travel destinations, list their own properties, rent places, and share reviews. The platform provides a seamless experience for both hosts and guests through secure authentication, session management, and dynamic content rendering.

The application is deployed on Render and uses MongoDB Atlas for cloud database storage.

---

## 🚀 Live Demo

🔗 https://travelnest-fgem.onrender.com

---

## ✨ Features

- 🔐 User Authentication (Signup/Login/Logout)
- 🏠 Add, Edit, and Delete Travel Listings
- Upload and Manage Listing Images (Cloudinary Integration)
- 📍 Explore Listings by Destination
- 💬 Post and Delete Reviews
- 🔎 Search Functionality
- ⚡ Flash Messages for User Feedback
- 🧭 RESTful Routing
- ☁️ Cloud Database Integration (MongoDB Atlas)
- 🌐 Fully Deployed on Render

---

## 🛠 Tech Stack

### Backend
- Node.js
- Express.js
- MongoDB Atlas
- Mongoose
- Passport.js (Authentication)
- Express Session
- Connect-Mongo
- Method-Override
- Cloudinary (Image Storage)
- Multer (File Upload Handling)

### Frontend
- EJS (Embedded JavaScript Templates)
- Bootstrap
- HTML5
- CSS3

---

## 🏗 Architecture

- MVC (Model-View-Controller) Pattern
- RESTful APIs
- Middleware-based authentication & authorization
- Session-based login system
- Cloud-hosted database

---

## 📂 Installation & Setup

1. Clone the repository:
   ```bash
   git clone <your-repo-link>
   
2. Install dependencies:
   npm install
   
4. Create a .env file and add:
   ATLASDB_URL=your_mongodb_connection_string, 
   SECRET=your_secret_key
   
6. Run the application:
   node app.js

7. Open in browser:
   http://localhost:3000
