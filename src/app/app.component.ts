import { Component, ViewChild } from '@angular/core';
import { MovieListComponent } from './movie-list/movie-list.component';
@Component( {
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: [ './app.component.css' ],
} )
export class AppComponent {
    @ViewChild( MovieListComponent ) movieList : MovieListComponent;

    selectCategory( { category } : { category : string } ) : void {
        this.movieList.refreshList( category );
    }
}
