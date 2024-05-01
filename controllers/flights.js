const Flight = require('../models/flight');
const Ticket = require('../models/ticket');

module.exports = {
  index,
  new: newFlight,
  create,
  show
}

async function index(req,res) {
  const flights = await Flight.find();
  res.render('flights/index', { flights })
}

async function newFlight(req, res) {
  res.render('flights/new', { title: 'new flight' });
}

async function create(req,res) {
  try {
          await Flight.create(req.body);
          res.redirect('/flights');
        } catch (err) {
          console.error(err);
          res.status(500).send('Server Error');
        }
}

async function show(req, res) {
  const flight = await Flight.findById(req.params.id)
  const tickets = await Ticket.find({ flight: flight._id })
      res.render('flights/show', { flight, tickets, title: "flight details" });
}