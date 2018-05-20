const axios = require('axios');
const API = 'https://api.themoviedb.org/3';
const creds = require('../../creds.js');
const api_key = creds.key;

module.exports = {
  getMovies( req, res ) {
    axios.get( `${ API }/movie/top_rated?api_key=${ api_key }` )
    .then( ( movies ) => {
      res.status(200).json( movies.data );
    } )
    .catch( ( error ) => {
      res.status( 500 ).send( error );
    } );
  },
};
