import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component( {
    selector: 'app-movie-details',
    templateUrl: './movie-details.component.html',
    styleUrls: [ './movie-details.component.scss' ],
} )

export class MovieDetailsComponent {

    constructor(
      public dialogRef : MatDialogRef<MovieDetailsComponent>,
      @Inject(  MAT_DIALOG_DATA ) public movie : any,
    ) {}

    onNoClick() : void {
        this.dialogRef.close();
    }

    getFullPosterUrl( url ) : string {
        return url ? `https://image.tmdb.org/t/p/w500${ url }` : '/assets/placeholder.jpg';
    }

    formatMinutes() : string {
        return `${ Math.floor( this.movie.runtime / 60 ) }h ${ this.movie.runtime % 60 }m`;
    }

    getProdCompanies() : string {
        return this.movie.production_companies.map( company => company.name ).join( ', ' );
    }

    getMovieGenres() : string {
        return this.movie.genres.map( genre => genre.name ).join( ', ' );
    }

    getImdbUrl() : string {
        return `https://www.imdb.com/title/${ this.movie.imdb_id }`;
    }

}
