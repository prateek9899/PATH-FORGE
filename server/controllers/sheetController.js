const Sheet = require('../models/Sheet');

exports.getAllSheets = async (req, res) => {
  try {
    const sheets = await Sheet.find().select('-problems').lean();
    res.json(sheets);
  } catch (error) {
    console.error('GetAllSheets error:', error);
    res.status(500).json({ message: 'Server error' });
  }
};

exports.getSheetBySlug = async (req, res) => {
  try {
    const sheet = await Sheet.findOne({ slug: req.params.slug }).lean();
    if (!sheet) {
      return res.status(404).json({ message: 'Sheet not found' });
    }
    res.json(sheet);
  } catch (error) {
    console.error('GetSheetBySlug error:', error);
    res.status(500).json({ message: 'Server error' });
  }
};
