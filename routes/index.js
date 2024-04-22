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

router.get('/about', function(req, res, next) {
  res.render('about', { title: 'About Us' });
});

router.get('/contact', function(req, res, next) {
  res.render('contact', { title: 'Contact Us' });
});

module.exports = router;
