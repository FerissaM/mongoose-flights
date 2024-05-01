const Ticket = require('../models/ticket');
const Flight = require('../models/flight')

async function create(req, res) {
  req.body.flight = req.params.id;
  try {
    const ticket = await Ticket.create(req.body);
    res.redirect(`/flights/${req.params.id}`);
  } catch (err) {
    console.error(err);
    res.redirect(`/flights/${req.params.id}`);
  }
}

async function newTicket (req,res) {
    const flight = await Flight.findById(req.params.id)
    res.render('tickets/new', { title: 'new ticket', flightId: flight._id});
}

module.exports = {
  create,
  new: newTicket
};
