const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const {
  signup,
  login,
  getMe,
  updateMe,
} = require('../controllers/authController');

// Public routes
router.post('/signup', signup);
router.post('/login', login);

// Protected routes
router.get('/me', auth, getMe);
router.put('/me', auth, updateMe);

module.exports = router;
