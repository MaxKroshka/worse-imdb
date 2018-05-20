import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl } from '@angular/forms';

interface Filter {
    name : string;
}

@Component( {
    selector: 'app-toolbar',
    templateUrl: './toolbar.component.html',
    styleUrls: [ './toolbar.component.scss' ],
} )
export class ToolbarComponent implements OnInit {
    public searchForm : FormControl = new FormControl();
    public selectedFilter : string;
    public filters : Filter[] = [
        {
            name : 'Popularity',
        },
        {
            name : 'Name',
        },
        {
            name : 'Year',
        },
    ];
    @Output() onSelectCategory : EventEmitter<any> = new EventEmitter();

    ngOnInit() : void {
        this.selectedFilter = this.filters[0].name;
        this.selectCategory( this.selectedFilter );
    }

    selectCategory( category : string ) : void {
        this.onSelectCategory.emit( { category } );
    }

}
