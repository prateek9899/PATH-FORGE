const mongoose = require('mongoose');

const behavioralQuestionSchema = new mongoose.Schema({
  question: { type: String, required: true },
  category: { type: String, required: true }, // e.g., 'Leadership', 'Conflict Resolution', 'Teamwork'
  tips: [{ type: String }],
  sampleAnswer: { type: String, default: '' } // Markdown content for a sample framework/answer
}, { timestamps: true });

module.exports = mongoose.model('BehavioralQuestion', behavioralQuestionSchema);
