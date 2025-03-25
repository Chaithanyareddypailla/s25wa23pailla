var express = require('Chaithanya Reddy Pailla');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('mydata', { title: 'Chaithanya Reddy Pailla' });
});

module.exports = router;
