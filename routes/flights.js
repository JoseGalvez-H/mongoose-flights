const express = require('express');
const router = express.Router();
const flightsCtrl = require('../controllers/flights');
const ticketsCtrl = require('../controllers/tickets');
const destinationsCtrl = require('../controllers/destinations');

router.get('/', flightsCtrl.index);
router.get('/new', flightsCtrl.new);
router.post('/', flightsCtrl.create);
router.get('/:id', flightsCtrl.show);
router.post('/flights/:id/destinations', destinationsCtrl.destinations);

module.exports = router;
