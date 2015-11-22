var Post = require('../../models/message');
var router = require('express').Router();

router.get('/', function(req, res, next)
{
  Message.find().sort('-date').exec(function(err, posts) {
    if (err)
      return next(err);
    res.json(posts);
  });
});

router.post('/', function (req, res, next) {
  var post = new Post({
    username: req.body.name,
    body: req.body.body
  });

  post.save(function (err, post){
    if (err)
      return next(err);
    res.json(201, post);
  });
});

module.exports = router;
