var express  = require('express'),
    mongoose = require('mongoose'),
    _        = require('underscore'),
    crypto   = require('crypto');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/register', function(req, res, next) {
  var email = req.params.email;
  var username = req.params.username;
  var password = crypto.createHash('sha256').update(req.params.password).digest('hex');
  var tel = req.params.tel;
  var role = req.params.role;

  mongoose.createConnection(27017, 'localhost', {
    user: 'xiaoleiy',
    pass: 'xiaoleiy',
    server: {poolSize: 10}
  });

  var db = mongoose.connection;
  db.on('error', console.error.bind(console, 'connection error: '));
  db.once('open', function(callback){
    console.info('mongodb is connected');
  });

});

router.post('/login', function(req, res, next) {

});

module.exports = router;
