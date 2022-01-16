const router = require('express').Router();
const mongoUtil = require("../../mongoUtil");


router.get('/', async (req, res) => {
    const db = mongoUtil.getDb(); 
    const cursor = db.collection("Quotes").find({});
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

// router.get('/:id', async (req, res) => {
//     const db = mongoUtil.getDb();
//     const reqID = req.params.id;  
//     console.log(reqID); 
//     const oID = BSON.ObjectID.createFromString(reqID);
//     const result = await db.collection("Quotes").find({_id: oID});
//     res.send({"data": result}); 
//     return res.status(200); 
    
// });

module.exports = router; 
