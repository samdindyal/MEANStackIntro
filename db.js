var mongoose = require('mongoose');
if (process.env.MONGOLAB_URI)
  mongoose.connect(process.env.MONGOLAB_URI, function(err) {
    if (err)
      throw err;
    console.log('mongodb connected');
});

module.exports = mongoose;
