const BehavioralQuestion = require('../models/BehavioralQuestion');

exports.getAllQuestions = async (req, res) => {
  try {
    const { category } = req.query;
    let query = {};
    if (category) query.category = category;
    
    const questions = await BehavioralQuestion.find(query).lean();
    res.json(questions);
  } catch (error) {
    console.error('GetAllBehavioralQuestions error:', error);
    res.status(500).json({ message: 'Server error' });
  }
};
