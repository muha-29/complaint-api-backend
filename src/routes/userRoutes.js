// routes/userRoutes.js
const express = require('express');
const router = express.Router();
const User = require('./models/User');

// Helper: error‑handling wrapper
const asyncHandler = fn => (req, res, next) => fn(req, res, next).catch(next);



// 2️⃣ Get current user’s profile (requires auth middleware)
// Example: you have `req.user` set by JWT or session
router.get('/users/profile', asyncHandler(async (req, res) => {
  // Replace `req.user.id` with whatever identifies the logged‑in user
  const user = await User.findById(req.user.id).select('-__v');
  if (!user) {
    return res.status(404).json({ message: 'Profile not found' });
  }
  res.json(user);
}));

module.exports = router;