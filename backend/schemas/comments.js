const mongoose = require('mongoose');
Schema = mongoose.Schema;

const Comment = new Schema({
	name: String,
	movie_name: String,
	comment: String,
	movie_rating: Number
});


module.exports = mongoose.model('comments', Comment);