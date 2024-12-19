const express = require('express');
const router = require('./src/route/api');
const app = express();
const path = require('path');

// Security Middleware
const rateLimit = require('express-rate-limit');
const helmet = require('helmet');
const mongoSanitize = require('express-mongo-sanitize');
const xss = require('xss-clean');
const hpp = require('hpp');
const cors = require('cors');
require('dotenv').config(); // Environment variables

// Apply Security Middleware
app.use(cors());
app.use(helmet());
app.use(mongoSanitize());
app.use(xss());
app.use(hpp());

// Body Parser Implementation (using built-in Express)
app.use(express.json());

// Rate Limiter
const limiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 300, // Limit each IP to 300 requests per windowMs
});
app.use(limiter); // Attach rate limiter to the app

// MongoDB Database Connection
const mongoose = require('mongoose');

const URI = "mongodb+srv://cruduser:cruduser@cluster0.44xkx.mongodb.net/CRUD"; // Replace with your actual credentials
const OPTIONS = {
    autoIndex: true, // Keep this if you need automatic index creation
};

mongoose.connect(URI, OPTIONS)
    .then(() => {
        console.log("MongoDB Connection Success");
    })
    .catch((error) => {
        console.error("MongoDB Connection Failed:", error.message);
    });

// Managing Backend API Routing
app.use("/api/v1", router); // API routes will now be processed first

// Managing Frontend Routing
app.use(express.static('client/build'));

app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
});

// Export the app instance
module.exports = app;
