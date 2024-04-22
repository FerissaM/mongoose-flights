const express = require('express');
const router = express.Router();
const flightsCtrl = require('../controllers/flights');
const ticketsCtrl = require('../controllers/tickets');

// GET /flights/:id/tickets/new - Display form for creating new ticket
router.get('/flights/:id/tickets/new', ticketsCtrl.new);

module.exports = router;
