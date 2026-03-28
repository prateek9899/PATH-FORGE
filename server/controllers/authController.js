const User = require('../models/User');
const jwt = require('jsonwebtoken');

/**
 * Generate a JWT token for the given user ID and email.
 * Token expires in 7 days.
 */
const generateToken = (user) => {
  return jwt.sign(
    { id: user._id, email: user.email },
    process.env.JWT_SECRET,
    { expiresIn: '7d' }
  );
};

/**
 * POST /api/auth/signup
 * Register a new user. Returns JWT token on success.
 */
exports.signup = async (req, res) => {
  try {
    const { name, email, password, selectedDomain, goals } = req.body;

    // Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: 'Email already registered' });
    }

    const user = await User.create({ name, email, password, selectedDomain, goals });
    const token = generateToken(user);

    res.status(201).json({
      token,
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        selectedDomain: user.selectedDomain,
        goals: user.goals,
      },
    });
  } catch (error) {
    console.error('Signup error:', error);
    res.status(500).json({ message: 'Server error during signup' });
  }
};

/**
 * POST /api/auth/login
 * Authenticate user with email and password. Returns JWT token.
 */
exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Find user and explicitly include password field
    const user = await User.findOne({ email }).select('+password');
    if (!user) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }

    const isMatch = await user.comparePassword(password);
    if (!isMatch) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }

    const token = generateToken(user);

    res.json({
      token,
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        selectedDomain: user.selectedDomain,
        goals: user.goals,
      },
    });
  } catch (error) {
    console.error('Login error:', error);
    res.status(500).json({ message: 'Server error during login' });
  }
};

/**
 * GET /api/auth/me
 * Get the currently authenticated user's profile.
 */
exports.getMe = async (req, res) => {
  try {
    const user = await User.findById(req.user.id);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    res.json({
      id: user._id,
      name: user.name,
      email: user.email,
      selectedDomain: user.selectedDomain,
      goals: user.goals,
      createdAt: user.createdAt,
    });
  } catch (error) {
    console.error('GetMe error:', error);
    res.status(500).json({ message: 'Server error' });
  }
};

/**
 * PUT /api/auth/me
 * Update the authenticated user's profile (domain, goals, name).
 */
exports.updateMe = async (req, res) => {
  try {
    const { name, selectedDomain, goals } = req.body;
    const user = await User.findByIdAndUpdate(
      req.user.id,
      { name, selectedDomain, goals },
      { new: true, runValidators: true }
    );
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    res.json({
      id: user._id,
      name: user.name,
      email: user.email,
      selectedDomain: user.selectedDomain,
      goals: user.goals,
    });
  } catch (error) {
    console.error('UpdateMe error:', error);
    res.status(500).json({ message: 'Server error' });
  }
};
