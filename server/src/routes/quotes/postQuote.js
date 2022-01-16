const router = require('express').Router();
const mongoUtil = require("../../mongoUtil");


router.post('/', async (req, res) => {
    const db = mongoUtil.getDb(); 
    const body = req.body;
    console.log(body) 
    db.collection("Quotes").insertOne(body, function (err, result) {
        if (err) {
            res.send({"error": err.message}); 
            return res.status(500); 
        }
        res.send({"data": result }); 
        return res.status(200); 
    })
    
});

module.exports = router; 
