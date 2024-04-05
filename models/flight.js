const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ticket = require('./ticket');

const destinationSchema = new Schema({
    airport: {
        type: String,
        enum: ['AUS', 'DFW', 'DEN', 'LAX', 'SAN', 'SEA', 'NYC', 'LON', 'HNL', 'SEA'],
    },
    arrival: {
        type: Date,
    },
}, {
    timestamps: true
})

const flightSchema = new Schema({
    airline: {
        type: String,
        enum: ['American', 'Southwest', 'United'],
        required: true
    },
    airport: {
        type: String,
        enum: ['AUS', 'DFW', 'DEN', 'LAX', 'SAN'],
        default: 'AUS'
    },
    flightNo: {
        type: Number,
        required: true,
        min: 10,
        max: 9999
    },
    departs: {
        type: Date,
        default: () => new Date(new Date().setFullYear(new Date().getFullYear() + 1))
    },
    destinations: [destinationSchema],
    tickets: [{
        type: Schema.Types.ObjectId,
        ref: 'Ticket'
    }]
})


module.exports = mongoose.model('Flight', flightSchema);

