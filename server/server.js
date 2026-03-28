require('dotenv').config();
const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');

// Import route modules
const authRoutes = require('./routes/auth');
const roadmapRoutes = require('./routes/roadmaps');
const progressRoutes = require('./routes/progress');
const analyticsRoutes = require('./routes/analytics');

const sheetRoutes = require('./routes/sheets');
const questionRoutes = require('./routes/questions');
const fundamentalRoutes = require('./routes/fundamentals');
const companyRoutes = require('./routes/companies');
const systemDesignRoutes = require('./routes/systemDesign');
const behavioralRoutes = require('./routes/behavioral');

const app = express();

// --------------- Middleware ---------------
app.use(cors());
app.use(express.json());

// --------------- API Routes ---------------
app.use('/api/auth', authRoutes);
app.use('/api/roadmaps', roadmapRoutes);
app.use('/api/progress', progressRoutes);
app.use('/api/analytics', analyticsRoutes);

app.use('/api/sheets', sheetRoutes);
app.use('/api/questions', questionRoutes);
app.use('/api/fundamentals', fundamentalRoutes);
app.use('/api/companies', companyRoutes);
app.use('/api/system-design', systemDesignRoutes);
app.use('/api/behavioral', behavioralRoutes);

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() });
});

// 404 handler for unknown routes
app.use((req, res) => {
  res.status(404).json({ message: 'Route not found' });
});

// Global error handler
app.use((err, req, res, next) => {
  console.error('Unhandled error:', err);
  res.status(500).json({ message: 'Internal server error' });
});

// --------------- Start Server ---------------
const PORT = process.env.PORT || 5000;

connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`🚀 PathForge server running on port ${PORT}`);
  });
});
