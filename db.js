var mongoose = require('mongoose');
if (process.env.MONGOLAB_URI)
  mongoose.connect(process.env.MONGOLAB_URI, function() {
    console.log('mongodb connected');
  });

module.exports = mongoose;
