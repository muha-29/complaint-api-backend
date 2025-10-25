// src/routes/admin.js
const express = require('express');
const router = express.Router();
const {
  updateComplaintStatus,
  listAllComplaints,
} = require('../controllers/complaintController');

const { authMiddleware } = require('../middleware/authMiddleware');

router.use(authMiddleware);               // all routes below are protected

router.patch('/:id/status', updateComplaintStatus);
router.get('/list', listAllComplaints);

module.exports = router;