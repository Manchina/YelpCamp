# YelpCamp

YelpCamp is a web application where users can create and share information about campgrounds. Users can view details of different campgrounds, leave reviews, and more. This project is designed to demonstrate CRUD operations, user authentication, and authorization.

## Features

- User authentication (sign up, log in, log out)
- CRUD operations for campgrounds
- Add and delete comments on campgrounds
- User authorization for editing and deleting campgrounds/comments
- Responsive design

## Technologies Used

- **Backend**: Node.js, Express
- **Database**: MongoDB, Mongoose
- **Authentication**: Passport.js
- **Templating**: EJS
- **CSS Framework**: Bootstrap

## Installation

### Prerequisites

Ensure you have the following installed:

- [Node.js](https://nodejs.org/)
- [MongoDB](https://www.mongodb.com/)

### Steps

1. Clone the repository:
   ```bash
   git clone https://github.com/Manchina/YelpCamp.git
   cd YelpCamp
2. Intall requirements:
   ```bash
   npm install
3. Set up environment variables:
   ```bash
   CLOUDINARY_CLOUD_NAME=your-cloudinary-cloud-name
   CLOUDINARY_KEY=your-cloudinary-key
   CLOUDINARY_SECRET=your-cloudinary-secret
   DB=your-mongodb-url
   MAPTILER_API_KEY=your-maptile-api-key
   
#### To get the required keys:

    -Cloudinary: Sign up at Cloudinary to get your CLOUDINARY_CLOUD_NAME, CLOUDINARY_KEY, and CLOUDINARY_SECRET.
    -MongoDB: Sign up at MongoDB Atlas to get your MongoDB connection string (DB).
    -MapTiler: Sign up at MapTiler to get your MAPTILER_API_KEY.
4. Seed the database (optional):
   ```bash
   node seeds/index.js
5. Start the application:
   ```bash
   node app.js
6. Open your browser and visit http://localhost:3000
