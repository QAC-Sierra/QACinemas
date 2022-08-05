const mongoose = require('mongoose');
Schema = mongoose.Schema;

const Payment = new Schema({
    payment_id: Number,
    booking_id: Number,
    cardholderName: String,
    cardNumber: Number,
    expiryDate: String,
    securityCode: String
});


module.exports = mongoose.model('payments', Payment);