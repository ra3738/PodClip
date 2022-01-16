const BASE_ROUTE = '/api';
const TEST_ROUTE = '/dummy';
const TRANSCRIBE_ROUTE = '/transcribe';
const TRANSCRIPTION_ROUTE = '/transcriptions';
const ENVIRONMENT = process.env.NODE_ENV || 'development';

module.exports = {
  BASE_ROUTE, 
  TRANSCRIBE_ROUTE, 
  TRANSCRIPTION_ROUTE,
  ENVIRONMENT
}; 
