const Flight = require('../models/flight');

module.exports = {
    index,
    new: newFlight,
    create
};

async function index(req, res) {
    try {
        const flights = await Flight.find({}).sort({ departs: 'asc'});
        res.render('flights/index', { title: 'All Flights', flights });
    } catch (error) {
        res.status(500).send('Server Error');
    }
}

function newFlight(req, res) {
    res.render('flights/new', { title: 'Add Flight', errorMsg: ''});
}

async function create(req, res) {
    try {
        const { airline, airport, flightNo, departs } = req.body;
        await Flight.create({ airline, airport, flightNo, departs });
        res.redirect('/flights');
    } catch (error) {
        res.render('flights/new', { title: 'Add Flight', errorMsg: 'Error creating flight. Please try again.' });
    }
}