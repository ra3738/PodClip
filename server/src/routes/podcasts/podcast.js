const router = require('express').Router();
const mongoUtil = require("../../mongoUtil");


router.get('/:pname/', async (req, res) => {
    const podcastName = req.params.pname; 
    const db = mongoUtil.getDb(); 
    try {
    const result = await db.collection("Podcasts").findOne({title: podcastName}); 
    if (result) {
        res.send({"data": result}); 
        return res.status(200);
    }
}
catch(err) 
{
    console.error(err.message); 
    res.send({"error": err.message});
    return res.status(500); 
}});

module.exports = router; 
