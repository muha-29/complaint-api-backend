// src/routes/complaints.js
const express = require('express');
const router = express.Router();
const {
  createComplaint,
  getComplaint,
  listNearbyComplaints,
  listPublicResolved,
} = require('../controllers/complaintController');
const { upload } = require('../services/uploadService');

// Create a new complaint (accepts up to 3 photos)
router.post(
  '/',
  upload.array('photos', 3),
  createComplaint
);

// Get a single complaint by ID
router.get('/:id', getComplaint);

// Get open complaints within a radius (driving mode)
router.get('/', listNearbyComplaints);

// Public feed – only resolved complaints
router.get('/public', listPublicResolved);

module.exports = router;