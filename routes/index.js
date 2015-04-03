var express = require('express'),
    _       = require('underscore'),
    router  = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

router.get('/post/:id', function(req, res, next) {
  var postId = req.params.id;
  console.info('post id: ' + postId);
  res.render('index', { title: 'Express' });
});

router.get(/post.*/, function(req, res){
  console.info('req protocol: ' + req.protocol + ', path: ' + req.path);
  res.render('index', { title: req.path });
});

module.exports = router;
