const SystemDesignTopic = require('../models/SystemDesignTopic');

exports.getAllTopics = async (req, res) => {
  try {
    const topics = await SystemDesignTopic.find().select('-content').lean();
    res.json(topics);
  } catch (error) {
    console.error('GetAllTopics error:', error);
    res.status(500).json({ message: 'Server error' });
  }
};

exports.getTopicById = async (req, res) => {
  try {
    const topic = await SystemDesignTopic.findById(req.params.id).lean();
    if (!topic) {
      return res.status(404).json({ message: 'Topic not found' });
    }
    res.json(topic);
  } catch (error) {
    console.error('GetTopicById error:', error);
    res.status(500).json({ message: 'Server error' });
  }
};
