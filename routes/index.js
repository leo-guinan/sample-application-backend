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
    const price = parseFloat(cat.price)
    if (gte && lte &&  price >= gte && price <= lte) {
      catsToReturn.push(cat)
    }
    else if (gte && price >= gte ) {
      catsToReturn.push(cat)
    }
    else if (lte && price <= lte) {
      catsToReturn.push(cat)
    }
  })
  let uniqueCats = [...new Set(catsToReturn)];
  res.send(uniqueCats)
});

module.exports = router;
