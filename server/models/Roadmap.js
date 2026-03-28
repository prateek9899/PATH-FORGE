const mongoose = require('mongoose');

/**
 * Roadmap Schema
 * Represents a structured learning roadmap with sections → topics → subtopics.
 * Each topic has a difficulty level and estimated completion time.
 */

const subtopicSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, default: '' },
}, { _id: true });

const topicSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, default: '' },
  notes: { type: String, default: '' },
  youtubeLink: { type: String, default: '' },
  difficulty: {
    type: String,
    enum: ['beginner', 'intermediate', 'advanced'],
    default: 'beginner',
  },
  estimatedMinutes: { type: Number, default: 60 },
  subtopics: [subtopicSchema],
}, { _id: true });

const sectionSchema = new mongoose.Schema({
  title: { type: String, required: true },
  order: { type: Number, required: true },
  topics: [topicSchema],
}, { _id: true });

const roadmapSchema = new mongoose.Schema({
  title: { type: String, required: true },
  slug: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
  },
  description: { type: String, default: '' },
  domain: {
    type: String,
    enum: ['DSA', 'MERN', 'Java Backend', 'Data Science'],
    required: true,
  },
  icon: { type: String, default: '📚' },
  sections: [sectionSchema],
}, {
  timestamps: true,
});

module.exports = mongoose.model('Roadmap', roadmapSchema);
