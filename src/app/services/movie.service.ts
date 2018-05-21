import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { movieParams } from './../toolbar/toolbar.component';

@Injectable( {
    providedIn: 'root',
} )
export class MovieService {
    public latestParams : movieParams;
    constructor(
        private http : HttpClient,
    ) {}

    getMovies( { category, query, page } : movieParams ) : Observable<any> {
        const params : any = {};
        if( page ) {
            Object.assign( params, this.latestParams, { page } );
        } else {
            category ? params.category = category : params.query = query;
        }
        this.latestParams = params;
        return this.http.get( '/api/movies', { params } ).pipe( map( res => res ) );
    }

    getMovieDetails( id : any ) : Observable<any> {
        return this.http.get( '/api/details', { params : { id } } ).pipe( map( res => res ) );
    }

}
