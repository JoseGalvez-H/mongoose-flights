const Flight = require('../models/flight');
const Ticket = require('../models/ticket');

module.exports = {
    index,
    show,
    new: newFlight,
    create
};

async function index(req, res) {
    const flights = await Flight.find({}).sort({ departs: 'asc' });
    res.render('flights/index', { title: 'All Flights', flights });
}

async function show(req, res) {
    const flight = await Flight.findById(req.params.id);
    const tickets = await Ticket.find({ flight: flight.id});
    res.render('flights/show', { flight, tickets });
}


function newFlight(req, res) {
    res.render('flights/new', { title: 'Add Flight', errorMsg: '' });
}

async function create(req, res) {
    try {
        Flight.create(req.body);
        res.redirect('/flights');
    } catch (error) {
        console.log('error: ', error);
        res.render({ errorMessage: error.message });
    }
}



