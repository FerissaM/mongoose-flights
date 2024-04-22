const mongoose = require('mongoose');
const destinationSchema = require('./destination');

const flightSchema = new mongoose.Schema({
  airline: {
    type: String,
    enum: ['American', 'Southwest', 'United'],
    required: true
  },
  flightNo: {
    type: Number,
    required: true,
    min: 10,
    max: 9999
  },
  departs: {
    type: Date,
    required: true,
    default: Date.now
  },
  destinations: [destinationSchema] // Using destinationSchema as a subdocument
});

module.exports = mongoose.model('Flight', flightSchema);
