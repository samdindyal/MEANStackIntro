var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
  res.sendfile('layouts/splashpage.html');
});

router.get('/introduction', function(req, res) {
  res.sendfile('layouts/introduction.html');
});

router.use(express.static(__dirname + '/../assets'));

module.exports = router;
