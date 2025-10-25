// src/routes/chatbot.js
const express = require('express');
const router = express.Router();
const { getComplaintStatus } = require('../controllers/chatbotController');

router.get('/status', getComplaintStatus);

module.exports = router;