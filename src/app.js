// src/app.js
require('dotenv').config();
const express = require('express');
const cors = require('cors');
const { connectDB } = require('./config/db');
const complaintRoutes = require('./routes/complaints');
const adminRoutes = require('./routes/admin');
const authRoutes = require('./routes/auth');
const chatbotRoutes = require('./routes/chatbot');



const app = express();

// Middleware
app.use(cors());
app.use(express.json()); // for JSON bodies
app.use(express.urlencoded({ extended: true })); // for form bodies

// Connect to MongoDB
connectDB();

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/complaints', complaintRoutes);
app.use('/api/admin', adminRoutes);
app.use('/api/chatbot', chatbotRoutes);

// Simple health check
app.get('/health', (req, res) => res.send('OK'));

module.exports = app;