const {MongoClient} = require('mongodb'); 
const mongoPass = process.env.MONGOPASSWORD
const uri = `mongodb+srv://admin:${mongoPass}@podclip.0zdey.mongodb.net/PodClip?retryWrites=true&w=majority`;

var _db;

module.exports = {
    connectToServer: function( callback ) {
        MongoClient.connect( uri,  { useNewUrlParser: true }, function( err, client ) {
          _db  = client.db('PodClip');
          return callback( err );
        } );
      },
    
      getDb: function() {
        return _db;
      }
}