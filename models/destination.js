const mongoose = require('mongoose');

const destinationSchema = new mongoose.Schema({
  airport: {
    type: String,
    enum: ['AUS', 'DFW', 'DEN', 'LAX', 'SAN'] // Your choice of airports
  },
  arrival: {
    type: Date,
    required: true
  }
});

module.exports = destinationSchema;
