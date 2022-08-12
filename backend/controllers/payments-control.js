const stripe = require("stripe")(process.env.STRIPE_KEY)
const Payment = require('../schemas/payments');

const createPayment = (req, res) => {
	console.log(req.body);
	stripe.charges.create({
		source: req.body.tokenId,
		amount: req.body.amount,
		currency: req.body.currency,
		receipt_email: req.body.email,
	}).then(token => {
		const payment = new Payment({
			tokenId: req.body.tokenId,
			name: req.body.name,
			email: req.body.email,
			amount: req.body.amount,
			currency: req.body.currency,
			lastFour: req.body.lastFour,
			expiryDate: req.body.expiryDate
		});
		payment.save().then(() => {
			res.status(201).send(token);
		});
	}).catch(err => {
		res.status(400).send(err);
		console.error(err);
	});
}

getPaymentById = async (req, res) => {
	await Payment.findOne({payment_id: req.params.id}, (err, payment) => {
		if (err) {
			return res.status(400).json({success: false, error: err});
		}
		
		if (!payment) {
			return res.status(404).json({success: false, error: 'Payment not found!'});
		}
		return res.status(200).json({success: true, data: payment});
	}).catch(err => console.log(err));
}

getPayments = async (req, res) => {
	await Payment.find({}, (err, payments) => {
		if (err) {
			return res.status(400).json({success: false, error: err});
		}
		if (!payments.length) {
			return res.status(404).json({success: false, error: 'No payments found!'});
		}
		return res.status(200).json({success: true, data: payments});
	}).catch(err => console.log(err));
}

deletePayment = async (req, res) => {
	await Payment.findOneAndDelete({payment_id: req.params.id}, (err, payment) => {
		if (err) {
			return res.status(400).json({success: false, error: err});
		}
		if (!payment) {
			return res.status(404).json({success: false, error: 'No payment found!'});
		}
		return res.status(200).json({success: true, data: payment});
	}).catch(err => console.log(err));
}

module.exports = {
	createPayment,
	getPaymentById,
	getPayments,
	deletePayment,
}