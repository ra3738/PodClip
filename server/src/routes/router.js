const router = require('express').Router();
const transcribe = require('./transcribe/transcribe'); 
const podcast = require('./podcasts/podcast'); 
const quotes = require('./quotes/quotes'); 
const postQuote = require('./quotes/postQuote'); 
const { TRANSCRIBE_ROUTE, PODCAST_ROUTE, QUOTES_ROUTE, ADD_QUOTE_ROUTE } = require('../utils/constants');


router.use(TRANSCRIBE_ROUTE, transcribe); 
router.use(PODCAST_ROUTE, podcast); 
router.use(QUOTES_ROUTE, quotes); 
router.use(ADD_QUOTE_ROUTE, postQuote); 

module.exports = router;