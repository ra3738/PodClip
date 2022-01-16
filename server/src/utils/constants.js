const BASE_ROUTE = '/api';
const TRANSCRIBE_ROUTE = '/transcribe';
const TRANSCRIPTION_ROUTE = '/transcriptions';
const PODCAST_ROUTE = '/podcasts';
const ADD_QUOTE_ROUTE = '/quote'; 
const QUOTES_ROUTE = '/quotes'; 
const TRANSCRIPT = '/transcript'
const ENVIRONMENT = process.env.NODE_ENV || 'development';

module.exports = {
  BASE_ROUTE,
  TRANSCRIBE_ROUTE,
  TRANSCRIPTION_ROUTE,
  PODCAST_ROUTE,
  ADD_QUOTE_ROUTE, 
  QUOTES_ROUTE, 
  TRANSCRIPT, 
  ENVIRONMENT,
};
