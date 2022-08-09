const mongoose = require('mongoose');
Schema = mongoose.Schema;

const Payment = new Schema({
	tokenId: String,
	name: String,
	email: String,
	amount: Number,
	currency: String,
	lastFour: Number,
	expiryDate: String
});

module.exports = mongoose.model('payments', Payment);