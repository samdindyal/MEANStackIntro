var express = require('express');
var bodyParser = require('body-parser');

var port = process.env.PORT || 3000;

var app = express();
app.use(bodyParser.json());

app.use('/api/messages', require('./controllers/api/messages'));
app.use(require('./controllers/static'));

app.listen(port, function() {
  console.log('Server listening on', port);
});
