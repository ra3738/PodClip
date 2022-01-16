const axios = require('axios');

const getPodcastEpisode = () => {
  const url = 'https://lexfridman.com/feed/podcast/';
  axios.get(url).then(res => {
    if (res.headers['content-type'].includes('application/rss+xml')) {
      // XML parsing logic
    }
  });
};

module.exports = { getPodcastEpisode };
