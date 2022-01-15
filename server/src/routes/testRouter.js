const router = require('express').Router();
const echo = require('./testRoute/echo');
const { TEST_ROUTE } = require('../utils/constants');

router.use(TEST_ROUTE, echo);

module.exports = router;
