const express = require('express');

const BookingsControl = require('../controllers/bookings-control');

const router = express.Router();

//Create a booking required to take information from the booking form and input to
// db, getbyid needed to use a specific booking elsewhere.
router.post('/booking', BookingsControl.createBooking);
router.get('/booking/:id', BookingsControl.getBookingById);
router.get('/booking', BookingsControl.getBookings);

module.exports =router;