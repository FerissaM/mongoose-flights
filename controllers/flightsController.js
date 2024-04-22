const Flight = require('../models/flight');
const Ticket = require('../models/ticket');

exports.index = async function(req, res, next) {
  try {
    const flights = await Flight.find({});
    res.render('flights/index', { flights: flights });
  } catch (error) {
    next(error);
  }
};

exports.new = function(req, res, next) {
  res.render('flights/new', { title: 'Add Flight' });
};

exports.create = async function(req, res, next) {
  try { 
    res.send('Flight created successfully');
  } catch (error) {
    // Handle any errors
    next(error);
  }
};

exports.show = async function(req, res, next) {
  try {
    const flight = await Flight.findById(req.params.id);
    const tickets = await Ticket.find({ flight: flight._id });
    res.render('flights/show', { title: 'Flight Detail', flight, tickets });
  } catch (error) {
    next(error);
  }
};
