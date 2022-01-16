const router = require('express').Router();
const echo = require('./testRoute/echo');
const transcriptions = require('./transcriptions/transcript'); 
const { TEST_ROUTE, TRANSCRIPTIONS_ROUTE } = require('../utils/constants');

router.use(TEST_ROUTE, echo);
router.use(TRANSCRIPTIONS_ROUTE, transcriptions); 

module.exports = router;