const Movie = require('../schemas/movies');

createMovie = (req,res) => {
    const body = req.body;

    if (!body) {
        return res.status(400).json({
            success:false,
            error: 'You must provide a movie',
        })
    }

    const movie = new Movie(body);

    if (!movie){
        return res.status(400).json({success:false, error: err});
    }


    movie.save().then(() => {
        return res.status(201).json({
            success:true,
            id: movie._id,
            message: 'movie created!',
        })
    })
    .catch(error => {
        return res.status(400).json({error, message: 'Movie not created!'
    })
})
}

getMovieById = async (req, res) => {
    await Movie.findOne({movie_id: req.params.id}, (err, movie) => {
        if (err) {
            return res.status(400).json({success:false, error: err});
        }

        if (!movie) {
            return res.status(404).json({success:false, error: 'Movie not found!'});
        }
        return res.status(200).json({success:true, data: movie});
    }).catch(err => console.log(err));
}

getMovies = async (req, res) => {
    await Booking.find({}, (err, movies) => {
        if (err) {
            return res.status(400).json({success:false, error: err});
        }
        if (!movies.length) {
            return res.status(404).json({success:false, error: 'No movies found!'});
        }
        return res.status(200).json({success:true, data: movies});
    }).catch(err => console.log(err));
}
deleteMovie = async (req, res) => {
    await Movie.findOneAndDelete({movie_id: req.params.id}, (err, movie) => {
        if (err) {
            return res.status(400).json({success:false, error: err});
        }
        if (!movie) {
            return res.status(404).json({success:false, error: 'No movie found!'});
        }
        return res.status(200).json({success:true, data: movie});
    }).catch(err => console.log(err));
}

module.exports = {
    createMovie,
    getMovieById,
    getMovies,
    deleteMovie,
}