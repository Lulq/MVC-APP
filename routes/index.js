var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {  // next = middleware pode seguir com a requisição
  res.render('index', { title: 'Express' });
});

module.exports = router;
