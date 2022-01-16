const router = require('express').Router();
const mongoUtil = require("../../mongoUtil");


router.get('/', async (req, res) => {
    const db = mongoUtil.getDb(); 
    const idToFind = req.params.eid; 
    const cursor = db.collection("Transcriptions").find({});
    if ((await cursor.count()) === 0) {
        res.send({"data": []});
        return res.status(404); 
    } 
    const output = []; 
    await cursor.forEach(item => {
       output.push(item);  
    })

    res.send({"data": output}); 
    return res.status(200); 
});



module.exports = router; 