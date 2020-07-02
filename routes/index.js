const express = require('express');
const router = express.Router();

const Url = require('../models/Url');

// @route   Get /:urlCode
// @desc    Redirect to long/original Url
router.get('/:code', async (req, res) => {
  try {
    const url = await Url.findOne({ urlCode: req.params.code });

    if (url) {
      return res.redirect(url.longUrl);
    } else {
      return res.status(404).json('No URL found.');
    }
  } catch (err) {
    console.error(err);
    res.status(500).json('Server error.')
  }
});

module.exports = router;
