const router = require('express').Router();
const transcribe = require('./transcribe/transcribe');
const transcriptions = require('./transcriptions/transcriptions');
const { TRANSCRIBE_ROUTE } = require('../utils/constants');
const { TRANSCRIPTION_ROUTE } = require('../utils/constants');

router.use(TRANSCRIBE_ROUTE, transcribe);
router.use(TRANSCRIPTION_ROUTE, transcriptions);

module.exports = router;