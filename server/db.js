var MongoClient = require('mongodb').MongoClient;
var assert = require('assert');

var url = 'mongodb://M0ssMan:gravytrain@ds013014.mlab.com:13014/supersand';

MongoClient.connect(url, function(err, db) {
  assert.equal(null, err);
  console.log("Connected correctly to server.");
  db.close();
})
