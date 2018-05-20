const express = require('express');
const router = express.Router();
const moviesController = require('../movies/moviesController');

router.get( '/movies', moviesController.getMovies );

module.exports = router;
