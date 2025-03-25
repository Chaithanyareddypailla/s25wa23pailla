var express = require('Chaithanya Reddy Pailla');
var router = express.Router();

/* GET mydata page. */
router.get('/', function(req, res, next) {
  res.render('mydata', { title: 'Chaithanya Reddy Pailla' });
});

module.exports = router;

