var express = require('express');
var router = express.Router();

router.post('/join', function (req, res) {
  req.session.pseudo = req.body.pseudo
  res.redirect('/room/' + req.body.roomName)
});

router.post('/create', function (req, res) {
  req.session.pseudo = req.body.pseudo

  time = new Date().getTime()
  code = ""
  for (let i = 0; i < 8; i++) {
    code += String.fromCharCode(time % 26 + 65)
    time = Math.floor(time / 26)
  }

  res.redirect('/room/' + code.toUpperCase())
});

/* GET home page. */
router.get('/:roomName([A-Z]{8})', function (req, res, next) {
  res.render('room', { title: 'Express', roomName: req.params.roomName });
});

module.exports = router;