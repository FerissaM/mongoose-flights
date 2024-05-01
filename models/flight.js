// models/flight.js
const mongoose = require('mongoose');
const destinationSchema = require('./destination');

const flightSchema = new mongoose.Schema({
  airline: {
    type: String,
    enum: ['American', 'Southwest', 'United'] // Your choices of airlines
  },
  airport: {
    type: String,
    enum: ['AUS', 'DFW', 'DEN', 'LAX', 'SAN'], // Your choice of airports
    default: 'DEN'
  },
  flightNo: {
    type: Number,
    required: true,
    min: 10,
    max: 9999
  },
  departs: {
    type: Date,
    default: function() {
      return new Date(new Date().setFullYear(new Date().getFullYear() + 1)); // One year from date created
    }
  },
  destinations: [destinationSchema] // Array of destination subdocuments
});

module.exports = mongoose.model('Flight', flightSchema);
