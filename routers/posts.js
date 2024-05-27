const express = require('express');
const router = express.Router();

const { index, show, create } = require('../controllers/postsController');

router.get('/', index);
router.get('/create', create);
router.get('/:slug', show);

module.exports = router;