var dbconnections = require("../config/connections.js")
var MongoClient = require( 'mongodb' ).MongoClient;
var _db;

module.exports = {

  connectToServer: function( callback ) {
    MongoClient.connect(dbconnections.qa_db_connectionString, function( err, db ) {
      _db = db;
      return callback( err );
    } );
  },

  getDb: function() {
    return _db;
  }
};