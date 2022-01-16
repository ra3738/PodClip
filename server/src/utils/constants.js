const BASE_ROUTE = '/api';
const TRANSCRIBE_ROUTE = '/transcribe';
const PODCAST_ROUTE = '/podcasts';
const ENVIRONMENT = process.env.NODE_ENV || 'development';

module.exports = {
  BASE_ROUTE,
  TRANSCRIBE_ROUTE,
  PODCAST_ROUTE,
  ENVIRONMENT,
};
