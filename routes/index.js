var express = require('express');
var router = express.Router();
const flightsController = require('../controllers/flightsController');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Home Page' });
});


// Route for viewing all flights
router.get('/flights', flightsController.index);

// Route for displaying the new flight form
router.get('/flights/new', flightsController.new);

// Route for creating a new flight
router.post('/flights', flightsController.create);

module.exports = router;
