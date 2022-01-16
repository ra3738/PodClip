const router = require('express').Router();
const connect = require('../../db');

router.get('/file/:id', (req, res) => {
  const id = req.params.id;
  const db = connect();
  // const podcastSchema = new mongoose.Schema({
  //   title: String,
  // });
  const podcasts = db.Podcasts.find(
    {}
  );
  return res.status(200);
});

module.exports = router;
