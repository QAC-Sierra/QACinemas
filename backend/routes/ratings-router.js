const express = require('express');

const RatingsControl = require('../controllers/ratings-control');

const router = express.Router();

//For Ratings, create, getbyid, and get all are required.
router.post('/create', RatingsControl.createRating);
router.get('/getById/:id', RatingsControl.getRatingById);
router.get('/getAll', RatingsControl.getRatings);
router.delete('/delete/:id', RatingsControl.deleteRating)

module.exports =router;