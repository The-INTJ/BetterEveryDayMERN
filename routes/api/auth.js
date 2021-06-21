const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth');

// @route   GET api/auth
// @desc    Authentic, call middleware
// @acc     Public

router.get('/', auth, (req, res) => res.sond('Auth route'));

module.exports = router;