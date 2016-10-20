import { NgModule, CUSTOM_ELEMENTS_SCHEMA }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from "@angular/forms";
import { AppComponent }   from './app.component';
import { AlbumComponent } from './album.component';
import { AlbumListComponent } from './album-list.component';
import { AlbumFilterComponent } from './filter.component';
import { FilterPipe } from './filter.pipe';
import { CartComponent } from './cart.component';
import { AddReviewComponent } from './add-review.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule
  ],
  declarations: [
    AppComponent,
    AlbumComponent,
    AlbumListComponent,
    AlbumFilterComponent,
    FilterPipe,
    CartComponent,
    AddReviewComponent,
  ],
  bootstrap:    [ AppComponent ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})

export class AppModule { }
