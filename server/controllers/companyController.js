const Company = require('../models/Company');

exports.getAllCompanies = async (req, res) => {
  try {
    const { search, tier } = req.query;
    let query = {};
    
    if (search) {
      query.name = { $regex: search, $options: 'i' };
    }
    if (tier) {
      query.tier = tier;
    }
    
    const companies = await Company.find(query).select('-problems').lean();
    
    const stats = {
      totalCompanies: await Company.countDocuments(),
      totalProblems: await Company.aggregate([{ $group: { _id: null, total: { $sum: '$problemCount' } } }]).then(res => res[0]?.total || 0),
      faangCount: await Company.countDocuments({ tier: 'FAANG' })
    };
    
    res.json({ companies, stats });
  } catch (error) {
    console.error('GetAllCompanies error:', error);
    res.status(500).json({ message: 'Server error' });
  }
};

exports.getCompanyBySlug = async (req, res) => {
  try {
    const company = await Company.findOne({ slug: req.params.slug }).lean();
    if (!company) {
      return res.status(404).json({ message: 'Company not found' });
    }
    res.json(company);
  } catch (error) {
    console.error('GetCompanyBySlug error:', error);
    res.status(500).json({ message: 'Server error' });
  }
};
