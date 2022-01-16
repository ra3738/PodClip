//Import the mongoose module
var mongoose = require('mongoose');
var db = ""; 
function connect() 
{
//Set up default mongoose connection
const mongoPass = process.env.MONGOPASSWORD
var mongoDB = `mongodb+srv://admin:${mongoPass}@podclip.0zdey.mongodb.net/PodClip?retryWrites=true&w=majority`;
mongoose.connect(mongoDB, {useNewUrlParser: true, useUnifiedTopology: true}, () => console.log("Connected to DB succesfully"));

//Get the default connection
 db = mongoose.connection;

//Bind connection to error event (to get notification of connection errors)
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
}

module.exports = {db, connect}; 