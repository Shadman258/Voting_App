const mongoose = require('mongoose');
require('dotenv').config();

// Define the MongoDB connection URL
const mongoURL = process.env.MONGODB_URL_LOCAL // Replace 'mydatabase' with your database name
// const mongoURL = process.env.MONGODB_URL;

// Set up MongoDB connection
if (!mongoURL) {
    console.error('MONGODB_URL_LOCAL is not set in .env');
} else {
    mongoose.connect(mongoURL)
        .then(() => console.log('MongoDB connected'))
        .catch(err => console.error('MongoDB connection error:', err));
}

// Get the default connection
// Mongoose maintains a default connection object representing the MongoDB connection.
const db = mongoose.connection;

// Define event listeners for database connection

db.on('connected', () => {
    console.log('Connected to MongoDB server');
});

db.on('error', (err) => {
    console.error('MongoDB connection error:', err);
});

db.on('disconnected', () => {
    console.log('MongoDB disconnected');
});

// Export the database connection
module.exports = db;