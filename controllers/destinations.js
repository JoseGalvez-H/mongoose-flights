const Flight = require('../models/flight');

module.exports = {
    create,
    destinations
};

async function destinations(req, res) {
    try {
        const flight = await Flight.findById(req.params.id);
        if (!flight) {
            console.log('Flight not found');
            return res.redirect('/flights');
        }
        flight.destinations.push(req.body); 
        await flight.save(); 
        res.redirect(`/flights/${req.params.id}`);
    } catch (error) {
        console.error('Error adding destination:', error);
        res.redirect(`/flights/${req.params.id}`);
    }
}

async function create(req, res) {
    const flight = await Flight.findById(req.params.id);
    flight.destinations.push(req.body);
    try {
        await flight.save();
    } catch (error) {
        console.log(error);
    }
    res.redirect(`/flights/${flight._id}`)
}