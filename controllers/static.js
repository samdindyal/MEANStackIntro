var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
  res.sendfile('layouts/splashpage.html');
});

router.get('/introduction', function(req, res) {
  res.sendfile('layouts/introduction.html');
});

router.get('/example', function(req, res) {
  res.sendfile('layouts/example-app.html');
});

router.get('/setup', function(req, res) {
  res.sendfile('layouts/setup.html');
});

router.get('/simplewebapp', function(req, res) {
  res.sendfile('layouts/simplewebapp.html');
});

router.get('/deploy', function(req, res) {
  res.sendfile('layouts/deploy.html');
});

router.get('/experience', function(req, res) {
  res.sendfile('layouts/experience.html');
});

router.get('/contributions', function(req, res) {
  res.sendfile('layouts/contributions.html');
});

router.use(express.static(__dirname + '/../assets'));

module.exports = router;
