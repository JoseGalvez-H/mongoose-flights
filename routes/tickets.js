const express = require('express');
const router = express.Router();
const ticketsCtrl = require('../controllers/tickets');

router.get('/flights/:flightId/tickets/new', ticketsCtrl.newTicket);
router.post('/flights/:flightId/tickets', ticketsCtrl.create);

module.exports = router;

