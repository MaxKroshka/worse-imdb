import { Component, ViewChild } from '@angular/core';
import { MovieListComponent } from './movie-list/movie-list.component';
import { movieParams } from './toolbar/toolbar.component';

@Component( {
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: [ './app.component.css' ],
} )
export class AppComponent {
    @ViewChild( MovieListComponent ) movieList : MovieListComponent;

    refreshMovieList( params : movieParams ) : void {
        this.movieList.refreshList( params );
    }
}
