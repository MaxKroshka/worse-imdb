import { Component, OnInit } from '@angular/core';
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

  ngOnInit() : void {
    this.selectedFilter = this.filters[ 0 ].name;
  }

}
