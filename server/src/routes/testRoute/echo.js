const router = require('express').Router();

router.get('/echo/:test', (req, res) => {
  const message = req.params.test; 
  res.send(message); 
  return res.status(200); 
});

module.exports = router;
