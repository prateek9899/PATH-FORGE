const mongoose = require('mongoose');

const questionSchema = new mongoose.Schema({
  title: { type: String, required: true },
  difficulty: { type: String, enum: ['Easy', 'Medium', 'Hard'], required: true },
  pattern: { type: String, default: '' },
  companies: [{ type: String }],
  link: { type: String, required: true },
  acceptance: { type: Number, default: 0 },
  isPremium: { type: Boolean, default: false }
}, { timestamps: true });

module.exports = mongoose.model('Question', questionSchema);
