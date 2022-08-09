const mongoose = require('mongoose');
Schema = mongoose.Schema;

const Rating = new Schema({
    rating_id: Number,
    user_id: Number,
    movie_id: Number,
    rating: Number
});


module.exports = mongoose.model('ratings', Rating);