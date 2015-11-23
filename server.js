var express = require('express');
var bodyParser = require('body-parser');

var port = process.env.PORT || 3000;

var app = express();
app.use(bodyParser.json());

app.use('/api/messages', require('./controllers/api/messages'));
app.use(require('./controllers/static'));

var server = app.listen(port, function() {
  console.log('Server listening on', port);
});

var io = require('socket.io').listen(server);

io.on('connection', function(socket){
  console.log('a user connected');
  socket.on('disconnect', function(){
    console.log('user disconnected');
  });

  socket.on('new message', function(msg){
    io.emit('refresh', msg);
  });
});
