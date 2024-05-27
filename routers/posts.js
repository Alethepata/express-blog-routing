const express = require('express');
const router = express.Router();

const { index, show } = require('../controllers/postsController');

router.get('/', index);
router.get('/:slug', show);

module.exports = router;