import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatInputModule } from '@angular/material';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatDialogModule } from '@angular/material/dialog';
import { AppComponent } from './app.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { MovieListComponent } from './movie-list/movie-list.component';
import { MovieDetailsComponent } from './movie-details/movie-details.component';

@NgModule( {
    declarations: [
        AppComponent,
        MovieListComponent,
        ToolbarComponent,
        MovieDetailsComponent,
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        MatGridListModule,
        MatAutocompleteModule,
        MatFormFieldModule,
        MatToolbarModule,
        FormsModule,
        ReactiveFormsModule,
        MatInputModule,
        MatSelectModule,
        HttpClientModule,
        MatButtonModule,
        MatPaginatorModule,
        MatDialogModule,
    ],
    entryComponents: [
        MovieDetailsComponent,
    ],
    providers: [],
    bootstrap: [ AppComponent ],
} )
export class AppModule {}
