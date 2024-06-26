const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ticketSchema = new Schema({
  seat: { type: String, match: /[A-F][1-9]\d?/, required: true },
  price: { type: Number, min: 0, required: true },
  flight: { type: Schema.Types.ObjectId, ref: 'Flight', required: true }
});

const Ticket = mongoose.model('Ticket', ticketSchema);

module.exports = Ticket;