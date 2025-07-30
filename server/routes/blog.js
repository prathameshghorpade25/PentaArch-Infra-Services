const express = require('express');
const router = express.Router();

// Placeholder for blog routes

// @route   GET /api/blog
// @desc    Get blog posts
// @access  Public
router.get('/', (req, res) => {
  res.json({ message: 'Blog posts will be here' });
});

module.exports = router;
