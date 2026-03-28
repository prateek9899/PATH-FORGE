const Fundamental = require('../models/Fundamental');

exports.getAllModules = async (req, res) => {
  try {
    const modules = await Fundamental.find().select('-chapters.content').lean();
    res.json(modules);
  } catch (error) {
    console.error('GetAllModules error:', error);
    res.status(500).json({ message: 'Server error' });
  }
};

exports.getChapter = async (req, res) => {
  try {
    const { moduleSlug, chapterIndex } = req.params;
    const moduleDoc = await Fundamental.findOne({ slug: moduleSlug }).lean();
    
    if (!moduleDoc || !moduleDoc.chapters || !moduleDoc.chapters[chapterIndex]) {
      return res.status(404).json({ message: 'Chapter not found' });
    }
    
    res.json(moduleDoc.chapters[chapterIndex]);
  } catch (error) {
    console.error('GetChapter error:', error);
    res.status(500).json({ message: 'Server error' });
  }
};
