const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const { getAllCompanies, getCompanyBySlug } = require('../controllers/companyController');

router.get('/', auth, getAllCompanies);
router.get('/:slug', auth, getCompanyBySlug);

module.exports = router;
