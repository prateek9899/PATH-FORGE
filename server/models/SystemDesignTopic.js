const mongoose = require('mongoose');

const systemDesignTopicSchema = new mongoose.Schema({
  title: { type: String, required: true },
  slug: { type: String, required: true, unique: true, lowercase: true },
  category: { type: String, required: true }, // e.g., 'Fundamentals', 'Components', 'Real World'
  difficulty: { type: String, enum: ['Beginner', 'Intermediate', 'Advanced'], default: 'Intermediate' },
  content: { type: String, required: true }, // Markdown content
  readTime: { type: Number, default: 15 } // in minutes
}, { timestamps: true });

module.exports = mongoose.model('SystemDesignTopic', systemDesignTopicSchema);
