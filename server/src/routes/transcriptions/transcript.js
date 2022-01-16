const router = require('express').Router();

router.get('/:id', (req, res) => {
  // some logic 
  res.send(req.params.id); 
  return res.status(200); 
});

module.exports = router;
