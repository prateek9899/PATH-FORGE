const Question = require('../models/Question');

exports.getAllQuestions = async (req, res) => {
  try {
    const { difficulty, pattern, company } = req.query;
    let query = {};
    
    if (difficulty) query.difficulty = difficulty;
    if (pattern) query.pattern = pattern;
    if (company) query.companies = { $in: [company] };
    
    const questions = await Question.find(query).lean();
    res.json(questions);
  } catch (error) {
    console.error('GetAllQuestions error:', error);
    res.status(500).json({ message: 'Server error' });
  }
};
