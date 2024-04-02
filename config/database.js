const mongoose = require('mongoose');

//Establish connection to mongoDb
mongoose.connect(process.env.DATABASE_URL);

const db = mongoose.connection
db.on('connected', () => {
    console.log(`Connected to MongoDB ${db.name} on ${db.host} on ${db.port}`);
});