import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl } from '@angular/forms';

export interface movieParams {
    category? : string;
    query? : string;
    page? : number;
}

interface Filter {
    name : string;
    techName : string;
}

@Component( {
    selector: 'app-toolbar',
    templateUrl: './toolbar.component.html',
    styleUrls: [ './toolbar.component.scss' ],
} )
export class ToolbarComponent implements OnInit {
    public searchForm : FormControl = new FormControl();
    public selectedFilter : Filter;
    public filters : Filter[] = [
        {
            name : 'Top Rated',
            techName : 'top_rated',
        },
        {
            name : 'Popular',
            techName : 'popular',
        },
        {
            name : 'Upcoming',
            techName : 'upcoming',
        },
        {
            name : 'Now Playing',
            techName : 'now_playing',
        },
    ];
    @Output() onRefreshMovieList : EventEmitter<movieParams> = new EventEmitter();

    ngOnInit() : void {
        this.selectedFilter = this.filters[0];
        this.selectCategory( this.selectedFilter );
    }

    selectCategory( category : Filter ) : void {
        this.onRefreshMovieList.emit( { category : category.techName } );
    }

    searchMovies() : void {
        this.onRefreshMovieList.emit( { query : this.searchForm.value } );
    }

}
