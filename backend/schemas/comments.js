const mongoose = require('mongoose');
Schema = mongoose.Schema;

const Comment = new Schema({
    comment_id: Number,
    user_id: Number,
    movie_id: Number,
    comment: String
});


module.exports = mongoose.model('comments',Comment);