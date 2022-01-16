const router = require('express').Router();
const transcribe = require('./transcribe/transcribe'); 
const { TRANSCRIBE_ROUTE } = require('../utils/constants');

router.use(TRANSCRIBE_ROUTE, transcribe); 

module.exports = router;