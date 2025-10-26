const express = require('express');
const router = express.Router();
const {
  registerUser,
  loginUser,
  getUserProfile,
  updateUserProfile,
  getAllUsers,
  getUserById,
  deleteUser
} = require('../controllers/userController');
const auth = require('../middleware/auth');
const adminAuth = require('../middleware/adminAuth');

// Public routes
router.post('/register', registerUser);
router.post('/login', loginUser);

// Protected routes (requires authentication)
router.get('/profile', auth, getUserProfile);
router.put('/profile', auth, updateUserProfile);

// Admin routes (requires admin role)
router.get('/', auth, adminAuth, getAllUsers);
router.get('/:id', auth, adminAuth, getUserById);
router.delete('/:id', auth, adminAuth, deleteUser);

module.exports = router;