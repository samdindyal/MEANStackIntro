var express = require('express');
var bodyParser = require('body-parser');

var app = express();
app.use(bodyParser.json());

app.use(require('./controllers/static'));

app.listen(3000, function() {
  console.log('Server listening on', 3000);
});
