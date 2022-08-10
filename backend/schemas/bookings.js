const mongoose = require('mongoose');
Schema = mongoose.Schema;

const Booking = new Schema({
    booking_id: Number,
    title: String,
    screeningTime: Number,
    customerName: String,
    numberOfSeats: Number,
    Adult: Number,
    Child: Number,
    Concession: Number
});


module.exports = mongoose.model('bookings', Booking);