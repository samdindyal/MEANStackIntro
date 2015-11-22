var Message = require('../../models/message');
var router = require('express').Router();

router.get('/', function(req, res, next)
{
  Message.find().sort('-date').exec(function(err, messages) {
    if (err)
      return next(err);
    res.json(messages);
  });
});

router.post('/', function (req, res, next) {
  var message = new Message({
    name: req.body.name,
    body: req.body.body
  });

  message.save(function (err, message){
    if (err)
      return next(err);
    res.json(201, message);
  });
});

module.exports = router;
