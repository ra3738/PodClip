const router = require('express').Router();
const transcribe = require('./transcribe/transcribe'); 
const podcast = require('./podcasts/podcast'); 
const quotes = require('./quotes/quotes'); 
const postQuote = require('./quotes/postQuote'); 
const transcript = require('./transcript/transcript');
const { TRANSCRIBE_ROUTE, PODCAST_ROUTE, QUOTES_ROUTE, ADD_QUOTE_ROUTE, TRANSCRIPT } = require('../utils/constants');


router.use(TRANSCRIBE_ROUTE, transcribe); 
router.use(PODCAST_ROUTE, podcast); 
router.use(QUOTES_ROUTE, quotes); 
router.use(ADD_QUOTE_ROUTE, postQuote); 
router.use(TRANSCRIPT,transcript); 

module.exports = router;