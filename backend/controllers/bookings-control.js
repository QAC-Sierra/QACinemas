const Booking = require('../schemas/bookings');

createBooking = (req,res) => {
    const body = req.body;

    if (!body) {
        return res.status(400).json({
            success:false,
            error: 'You must provide a booking',
        })
    }

    const booking = new Booking(body);

    if (!booking){
        return res.status(400).json({success:false, error: err});
    }


    booking.save().then(() => {
        return res.status(201).json({
            success:true,
            id: booking._id,
            message: 'booking created!',
        })
    })
    .catch(error => {
        return res.status(400).json({error, message: 'Booking not created!'
    })
})
}

getBookingById = async (req, res) => {
    await Booking.findOne({booking_id: req.params.id}, (err, booking) => {
        if (err) {
            return res.status(400).json({success:false, error: err});
        }

        if (!booking) {
            return res.status(404).json({success:false, error: 'Booking not found!'});
        }
        return res.status(200).json({success:true, data: booking});
    }).catch(err => console.log(err));
}

getBookings = async (req, res) => {
    await Booking.find({}, (err, bookings) => {
        if (err) {
            return res.status(400).json({success:false, error: err});
        }
        if (!bookings.length) {
            return res.status(404).json({success:false, error: 'No bookings found!'});
        }
        return res.status(200).json({success:true, data: bookings});
    }).catch(err => console.log(err));
}

deleteBooking = async (req, res) => {
    await Booking.findOneAndDelete({booking_id: req.params.id}, (err, booking) => {
        if (err) {
            return res.status(400).json({success:false, error: err});
        }
        if (!booking) {
            return res.status(404).json({success:false, error: 'No booking found!'});
        }
        return res.status(200).json({success:true, data: booking});
    }).catch(err => console.log(err));
}

module.exports = {
    createBooking,
    getBookingById,
    getBookings,
    deleteBooking,
}