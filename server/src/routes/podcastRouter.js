const router = require('express').Router();
const file = require('./podcastRoute/file');
const { PODCAST_ROUTE } = require('../utils/constants');

router.use(PODCAST_ROUTE, file);

module.exports = router;
