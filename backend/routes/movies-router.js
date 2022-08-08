const express = require('express');

const MoviesControl = require('../controllers/movies-control');

const router = express.Router();

//For movie information create is required for initially inputting movies
//and getbyid, and get all are required.
router.post('/create', MoviesControl.createMovie);
router.get('/getById/:id', MoviesControl.getMovieById);
router.get('/getAll', MoviesControl.getMovies);

module.exports =router;