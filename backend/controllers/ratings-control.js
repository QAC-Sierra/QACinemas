const Rating = require('../schemas/ratings');

createRating = (req,res) => {
    const body = req.body;

    if (!body) {
        return res.status(400).json({
            success:false,
            error: 'You must provide a rating',
        })
    }

    const rating = new Rating(body);

    if (!rating){
        return res.status(400).json({success:false, error: err});
    }


    rating.save().then(() => {
        return res.status(201).json({
            success:true,
            id: rating._id,
            message: 'rating created!',
        })
    })
    .catch(error => {
        return res.status(400).json({error, message: 'Rating not created!'
    })
})
}

getRatingById = async (req, res) => {
    await Rating.findOne({rating_id: req.params.id}, (err, rating) => {
        if (err) {
            return res.status(400).json({success:false, error: err});
        }

        if (!rating) {
            return res.status(404).json({success:false, error: 'Rating not found!'});
        }
        return res.status(200).json({success:true, data: rating});
    }).catch(err => console.log(err));
}

getRatings = async (req, res) => {
    await Rating.find({}, (err, ratings) => {
        if (err) {
            return res.status(400).json({success:false, error: err});
        }
        if (!ratings.length) {
            return res.status(404).json({success:false, error: 'No ratings found!'});
        }
        return res.status(200).json({success:true, data: ratings});
    }).catch(err => console.log(err));
}

module.exports = {
    createBooking,
    getBookingById,
    getBookings,
}