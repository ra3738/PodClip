const BASE_ROUTE = '/api';
const TEST_ROUTE = '/dummy';
const TRANSCRIBE_ROUTE = '/transcribe';
const PODCAST_ROUTE = '/podcast';
const ENVIRONMENT = process.env.NODE_ENV || 'development';

module.exports = {
  BASE_ROUTE,
  TRANSCRIBE_ROUTE,
  PODCAST_ROUTE,
  ENVIRONMENT,
};
