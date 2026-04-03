const mongoose = require('mongoose');

const companyProblemSchema = new mongoose.Schema({
  title: { type: String, required: true },
  difficulty: { type: String, enum: ['Easy', 'Medium', 'Hard'], required: true },
  leetcodeLink: { type: String, default: '' },
  gfgLink: { type: String, default: '' },
  frequency: { type: Number, default: 0 }
}, { _id: true });

const companySchema = new mongoose.Schema({
  name: { type: String, required: true },
  slug: { type: String, required: true, unique: true, lowercase: true },
  logo: { type: String, default: '' },
  problemCount: { type: Number, default: 0 },
  tier: { type: String, enum: ['FAANG', 'Top Tier', null], default: null },
  problems: [companyProblemSchema]
}, { timestamps: true });

module.exports = mongoose.model('Company', companySchema);
