var mongoose = require('mongoose');
mongoose.connect('', function() {
  console.log('mongodb connected');
});

module.exports = mongoose;
