import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable( {
    providedIn: 'root',
} )
export class MovieService {

    constructor(
        private http : HttpClient,
    ) {}

    getMovies( category ) : Observable<any> {
        return this.http.get( '/api/movies', { params : { category } } ).pipe( map( res => res ) );
    }

}
