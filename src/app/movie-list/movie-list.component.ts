import { Component, OnInit } from '@angular/core';
import { MovieService } from '../services/movie.service';
import { Movie } from '../models/movie.model';

@Component( {
    selector: 'app-movie-list',
    templateUrl: './movie-list.component.html',
    styleUrls: [ './movie-list.component.scss' ],
} )
export class MovieListComponent {
    public movies : Movie[] = [];
    constructor(
      private movieService : MovieService,
    ) {}

    refreshList( category : string ) : void {
        this.movieService.getMovies( category ).subscribe( ( response ) => {
            this.movies = response.results;
        } );
    }

    getFullPosterUrl( url ) : string {
        return `https://image.tmdb.org/t/p/w500${ url }`;
    }

}
