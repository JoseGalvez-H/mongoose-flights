var express = require('express');
var router = express.Router();
var flightsCtrl = require('../controllers/flights');
var ticketsCtrl = require('../controllers/tickets');
var destinationsCtrl = require('../controllers/destinations');

router.get('/', flightsCtrl.index);
router.get('/new', flightsCtrl.new);
router.post('/', flightsCtrl.create);
router.get('/:id', flightsCtrl.show);
router.post('/flights/:id/destinations', destinationsCtrl.destinations);

module.exports = router;
