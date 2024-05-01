const express = require('express');
const router = express.Router();
const Flight = require('../models/flight');

// Index route for flights
router.get('/', async (req, res) => {
    res.render('index', { title: 'mongoose-flights'});
});

module.exports = router;