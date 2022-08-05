const express = require('express');

const PaymentsControl = require('../controllers/payments-control');

const router = express.Router();

//For payments, create is needed to save payment information to the db.
//GetById to get a specific payment document.
//GetAll needed to check everything stored.
router.post('/create', PaymentsControl.createPayment);
router.get('/getById/:id', PaymentsControl.getPaymentById);
router.get('/getAll', PaymentsControl.getPayments);

module.exports=router;


