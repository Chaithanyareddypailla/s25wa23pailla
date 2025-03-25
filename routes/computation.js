var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  // Get query value for x or use a random number
  let x = req.query.x ? parseFloat(req.query.x) : Math.random() * 100;

  // SID ends in 3 → we'll use Math.log
  let fn = "Math.log";
  let result = Math.log(x);

  // Format and send the response
  res.send(`${fn} applied to ${x} is ${result}`);
});

module.exports = router;
