// flightController.js

const Flight = require('../models/flight');

exports.index = async function(req, res, next) {
  try {
    // Fetch all flights from the database
    const flights = await Flight.find({});
    // Render the index view with the list of flights
    res.render('flights/index', { flights: flights });
  } catch (error) {
    // Handle any errors
    next(error);
  }
};

exports.new = function(req, res, next) {
  // Your logic for displaying the new flight form
  res.render('flights/new', { title: 'Add Flight' });
};

exports.create = async function(req, res, next) {
  try {
    // Your logic for creating a new flight
    // This might include parsing request data and saving it to the database
    // For simplicity, let's assume you're just rendering a success message
    res.send('Flight created successfully');
  } catch (error) {
    // Handle any errors
    next(error);
  }
};


exports.new = function(req, res, next) {
    // Your logic for displaying the new flight form
    res.render('flights/new', { title: 'Add Flight' });
  };