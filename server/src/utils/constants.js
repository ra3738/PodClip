const BASE_ROUTE = '/api';
const TEST_ROUTE = '/dummy';
const TRANSCRIPTIONS_ROUTE = '/transcriptions';
const ENVIRONMENT = process.env.NODE_ENV || 'development';

module.exports = {
  BASE_ROUTE,
  TEST_ROUTE, 
  TRANSCRIPTIONS_ROUTE, 
  ENVIRONMENT
}; 
