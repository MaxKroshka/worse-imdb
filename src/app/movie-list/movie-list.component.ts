import { Component, OnInit } from '@angular/core';
import { MovieService } from '../services/movie.service';
import { Movie } from '../models/movie.model';

@Component( {
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: [ './movie-list.component.scss' ],
} )
export class MovieListComponent implements OnInit {
  public movies : Movie[] = [];
  constructor(
    private movieService : MovieService,
  ) {}

  ngOnInit() : void {
    this.movieService.getMovies().subscribe( ( response ) => {
      this.movies = response.results;
    } );
  }

  getFullPosterUrl( url ) : string {
    return `https://image.tmdb.org/t/p/w500${ url }`;
  }

}
