const mongoose = require('mongoose');
Schema = mongoose.Schema;


const movies = new Schema({
    movie_id: Number,
    title: String,
    genre: String,
    actors: [{
        name: String,
    }],
    director: String,
    showingTimes: [{
        time: String
    }],
    imageLink: String
});

module.exports = movies;