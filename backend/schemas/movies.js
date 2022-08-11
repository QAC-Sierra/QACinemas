const mongoose = require('mongoose');
Schema = mongoose.Schema;


const Movie = new Schema({
    movie_id: Number,
    title: String,
    genre: String,
    actors: [{
        type: Array,
    }],
    director: String,
    showingTimes: [{
        type: Array,
    }],
    imageLink: String
});

module.exports = mongoose.model('movies', Movie);