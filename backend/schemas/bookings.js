const mongoose = require('mongoose');
Schema = mongoose.Schema;

const bookings = new Schema({
    booking_id: Number,
    title: String,
    screeningTime: Number,
    customerName: String,
    numberOfSeats: Number,
    Adult: Number,
    Child: Number,
    Concession: Number
});


module.exports = bookings;