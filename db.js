var mongoose = require('mongoose');
mongoose.connect('mongodb://cps530usr:lemotdepasse@ds057204.mongolab.com:57204/cps530exampleapp', function() {
  console.log('mongodb connected');
});

module.exports = mongoose;
