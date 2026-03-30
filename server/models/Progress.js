const mongoose = require('mongoose');

/**
 * Progress Schema
 * Tracks a user's completion status for each topic/subtopic in a roadmap.
 * Also stores detected weak areas with reasons.
 */
const completedItemSchema = new mongoose.Schema({
  topicId: { type: mongoose.Schema.Types.ObjectId, required: true },
  subtopicId: { type: mongoose.Schema.Types.ObjectId, default: null },
  completedAt: { type: Date, default: Date.now },
  timeSpentMinutes: { type: Number, default: 0 },
}, { _id: true });

const weakAreaSchema = new mongoose.Schema({
  topicId: { type: mongoose.Schema.Types.ObjectId, required: true },
  topicTitle: { type: String, default: '' },
  reason: { type: String, default: '' }, // e.g., "Took 2x longer than estimated", "Revisited multiple times"
}, { _id: false });

const progressSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  roadmapId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Roadmap',
    required: true,
  },
  completed: [completedItemSchema],
  weakAreas: [weakAreaSchema],
}, {
  timestamps: true,
});

// Compound index: one progress doc per user per roadmap
progressSchema.index({ userId: 1, roadmapId: 1 }, { unique: true });

module.exports = mongoose.model('Progress', progressSchema);
