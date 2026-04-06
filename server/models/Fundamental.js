const mongoose = require('mongoose');

const chapterSchema = new mongoose.Schema({
  title: { type: String, required: true },
  readTime: { type: Number, default: 10 }, // in minutes
  content: { type: String, required: true } // Markdown content
}, { _id: true });

const fundamentalSchema = new mongoose.Schema({
  moduleName: { type: String, required: true },
  slug: { type: String, required: true, unique: true, lowercase: true },
  icon: { type: String, default: '📑' },
  chapters: [chapterSchema]
}, { timestamps: true });

module.exports = mongoose.model('Fundamental', fundamentalSchema);
