const express = require('express');
const router = express.Router();

// Placeholder for admin routes

// @route   GET /api/admin/dashboard
// @desc    Get dashboard stats
// @access  Private
router.get('/dashboard', (req, res) => {
  res.json({ message: 'Welcome to the admin dashboard' });
});

module.exports = router;
