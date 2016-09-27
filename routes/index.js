var express = require('express');
var router = express.Router();
var emoji = require('node-emoji');

/* GET home page. */
router.get('/', function(req, res, next) {
  console.log(emoji.get('blackprincess'));

  res.render('index', { title: 'Emoji Cipher' });
});

module.exports = router;
