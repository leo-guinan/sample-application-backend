var express = require('express');
var router = express.Router();
var datasource = require('../cats.json')
/* GET home page. */
router.get('/', function(req, res, next) {
  res.send('Hello World!')
});

router.get('/cats/', function(req, res, next) {
  res.send(datasource)
});

router.get('/cats/filter/', function(req, res, next) {
  const lte = parseFloat(req.query.lte)
  const gte = parseFloat(req.query.gte)
  let catsToReturn = []
  datasource.forEach((cat) => {
    console.log(cat.price)
    console.log(gte)
    console.log(lte)
    console.log(cat.price >= gte)
    console.log(cat.price <= lte)
    if (gte && parseFloat(cat.price) >= gte ) {
      catsToReturn.push(cat)
    }
    if (lte && parseFloat(cat.price) <= lte) {
      catsToReturn.push(cat)
    }
  })
  let uniqueCats = [...new Set(catsToReturn)];
  res.send(uniqueCats)
});

module.exports = router;
