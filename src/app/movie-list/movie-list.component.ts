import { Component, ViewChild } from '@angular/core';
import { MovieService } from '../services/movie.service';
import { Movie } from '../models/movie.model';
import { movieParams } from './../toolbar/toolbar.component';
import { PageEvent } from '@angular/material';
import { MatPaginator } from '@angular/material/paginator';

@Component( {
    selector: 'app-movie-list',
    templateUrl: './movie-list.component.html',
    styleUrls: [ './movie-list.component.scss' ],
} )
export class MovieListComponent {
    public movies : Movie[] = [];
    public totalPages : number = 0;
    @ViewChild( MatPaginator ) paginator : MatPaginator;
    constructor(
      private movieService : MovieService,
    ) {}

    refreshList( params : movieParams ) : void {
        this.movieService.getMovies( params ).subscribe( ( response ) => {
            this.movies = response.results;
            this.totalPages = response.total_pages;
            if( !params.page ) {
                this.paginator.pageIndex = 0;
            }
        } );
    }

    getNextPage( event : PageEvent ) : void {
        // page numbers start with 1; page index starts with 0
        const page = event.pageIndex + 1;
        this.refreshList( { page } );
    }

    getFullPosterUrl( url ) : string {
        return url ? `https://image.tmdb.org/t/p/w500${ url }` : '/assets/placeholder.jpg';
    }

}
