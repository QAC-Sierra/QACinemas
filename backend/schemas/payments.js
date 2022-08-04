const mongoose = require('mongoose');
Schema = mongoose.Schema;

const payments = new Schema({
    payment_id: Number,
    booking_id: Number,
    cardholderName: String,
    cardNumber: Number,
    expiryDate: String,
    securityCode: String
});


module.exports = payments;