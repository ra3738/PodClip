const router = require('express').Router();
const transcribe = require('./transcribe/transcribe'); 
const podcast = require('./podcasts/podcast'); 
const { TRANSCRIBE_ROUTE, PODCAST_ROUTE } = require('../utils/constants');


router.use(TRANSCRIBE_ROUTE, transcribe); 
router.use(PODCAST_ROUTE, podcast); 

module.exports = router;