const jwt = require('jsonwebtoken');

/**
 * JWT authentication middleware.
 * Extracts the token from the Authorization header (Bearer <token>),
 * verifies it, and attaches the decoded user payload to req.user.
 */
const auth = (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return res.status(401).json({ message: 'No token provided, authorization denied' });
  }

  const token = authHeader.split(' ')[1];

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded; // { id, email }
    next();
  } catch (error) {
    return res.status(401).json({ message: 'Token is invalid or expired' });
  }
};

module.exports = auth;
