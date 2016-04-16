var mongoose = require('mongoose');
var mongo_uri = "" || process.env.MONGOLAB_URI;
if (mongo_uri)
  mongoose.connect(mongo_uri, function(err) {
    if (err)
      throw err;
    console.log('mongodb connected');
});

module.exports = mongoose;
