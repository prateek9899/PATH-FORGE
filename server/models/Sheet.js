const mongoose = require('mongoose');

const problemSchema = new mongoose.Schema({
  title: { type: String, required: true },
  difficulty: { type: String, enum: ['Easy', 'Medium', 'Hard'], default: 'Easy' },
  link: { type: String, required: true },
  pattern: { type: String, default: '' },
  companies: [{ type: String }],
  notes: { type: String, default: '' },
  status: { type: String, enum: ['Todo', 'Solving', 'Solved'], default: 'Todo' } // Will be handled per user in Progress, but keeping structure for reference or seed
}, { _id: true });

const sheetSchema = new mongoose.Schema({
  name: { type: String, required: true },
  slug: { type: String, required: true, unique: true, lowercase: true },
  description: { type: String, default: '' },
  icon: { type: String, default: '📚' },
  problems: [problemSchema]
}, { timestamps: true });

module.exports = mongoose.model('Sheet', sheetSchema);
