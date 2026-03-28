const mongoose = require('mongoose');

/**
 * ActivityLog Schema
 * Daily aggregate of user activity – how many topics were completed and
 * total minutes spent on a given day. Used for streak calculations
 * and the activity graph on the dashboard.
 */
const activityLogSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
  topicsCompleted: {
    type: Number,
    default: 0,
  },
  minutesSpent: {
    type: Number,
    default: 0,
  },
}, {
  timestamps: true,
});

// One log entry per user per day
activityLogSchema.index({ userId: 1, date: 1 }, { unique: true });

module.exports = mongoose.model('ActivityLog', activityLogSchema);
