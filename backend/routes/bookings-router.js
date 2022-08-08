const express = require('express');

const BookingsControl = require('../controllers/bookings-control');

const router = express.Router();

//For bookings, create, getbyid, and get all are required.
router.post('/create', BookingsControl.createBooking);
router.get('/getById/:id', BookingsControl.getBookingById);
router.get('/getAll', BookingsControl.getBookings);
router.delete('/delete', BookingsControl.deleteBooking);

module.exports =router;