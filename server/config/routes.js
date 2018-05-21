const express = require('express');
const router = express.Router();
const moviesController = require('../movies/moviesController');

router.get( '/movies', moviesController.getMovies );
router.get( '/details', moviesController.getMovieDetails );

module.exports = router;
