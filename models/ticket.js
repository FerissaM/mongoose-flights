const mongoose = require('mongoose');
const ticketSchema = new mongoose.Schema({
  seat: {
    type: String,
    required: true,
    match: /[A-F][1-9]\d?/
  },
  price: {
    type: Number,
    min: 0,
    required: true
  },
  flight: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Flight',
    required: true
  }
});

const Ticket = mongoose.model('Ticket', ticketSchema);

module.exports = Ticket;
