const Ticket = require('../models/ticket');
const Flight = require('../models/flight'); 

module.exports = {
    newTicket,
    create
};

async function newTicket(req, res) {
    const flightId = req.params.flightId; 
    res.render('tickets/new', { title: 'Add Ticket', flightId: flightId });
}

async function create(req, res) {
    req.body.flight = req.params.flightId;
    try {
        await Ticket.create(req.body);
        res.redirect(`/flights/${req.params.flightId}`);
    } catch (error) {
        console.log(error);
        res.redirect('/flights');
    }
}
