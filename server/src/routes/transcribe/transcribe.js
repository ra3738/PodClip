const router = require('express').Router();
// Expect url in body 
router.post('/', (req, res) => {
  // some logic 
  res.send(req.body.url); 
  return res.status(200); 
});

module.exports = router;
