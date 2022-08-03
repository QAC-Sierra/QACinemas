const mongoose = require('mongoose');
Schema = mongoose.Schema;

const ratings = new Schema({
    comment_id: Number,
    user_id: Number,
    movie_id: Number,
    rating: Number
});


module.exports = ratings;