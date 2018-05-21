const axios = require('axios');
const API = 'https://api.themoviedb.org/3';
const creds = require('../../creds.js');
const api_key = creds.key;

module.exports = {
  getMovies( req, res ) {
    let url;
    if( req.query.category ) {
        url = `${ API }/movie/${ req.query.category }?api_key=${ api_key }&page=${ req.query.page || 1 }`;
    } else {
        url = `${ API }/search/movie?api_key=${ api_key }&query=${ req.query.query }&page=${ req.query.page || 1 }`;
    }
    axios.get( url )
        .then( ( movies ) => {
          res.status( 200 ).json( movies.data );
        } )
        .catch( ( error ) => {
          res.status( 500 ).send( error );
        } );
  },
  getMovieDetails( req, res ) {
      const movieId = req.query.id;
      const url =`${ API }/movie/${ movieId }?api_key=${ api_key }`;
      axios.get( url )
          .then( ( details ) => {
             res.status( 200 ).json( details.data );
          } )
          .catch( ( error ) => {
              res.status( 500 ).send( error );
          } );
  },
};
