const express = require('express');
const router = express.Router();
const flightsController = require('../controllers/flightsController');

router.get('/', flightsController.index);
router.get('/:id', flightsController.show);
router.post('/:id/destinations', flightsController.addDestination);

module.exports = router;
