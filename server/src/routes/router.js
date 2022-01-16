const router = require('express').Router();
const echo = require('./testRoute/echo');
const transcribe = require('./transcribe/transcribe'); 
const { TEST_ROUTE, TRANSCRIBE_ROUTE } = require('../utils/constants');

router.use(TEST_ROUTE, echo);
router.use(TRANSCRIBE_ROUTE, transcribe); 

module.exports = router;