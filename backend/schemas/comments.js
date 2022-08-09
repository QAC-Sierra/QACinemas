const mongoose = require('mongoose');
Schema = mongoose.Schema;

const comments = new Schema({
    comment_id: Number,
    user_id: Number,
    movie_id: Number,
    comment: String
});


module.exports = comments;