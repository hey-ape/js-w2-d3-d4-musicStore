import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Album } from './album.model';
import { AlbumComponent } from './album.component';

@Component({
  selector: 'album-filter',
  template: `
  <div class="form">
    <div class="col-sm-6">
      <label>Filter by Genre:</label>
      <select class="form-control" (change)="genreChange($event.target.value)">
        <option value="all">Show All</option>
        <option *ngFor="let genre of childGenreList"
        [value]="genre">{{ genre }}</option>
      </select>
    </div>
    <div class="col-sm-6">
      <label>Filter by Artist:</label>
      <select class="form-control" (change)="artistChange($event.target.value)">
        <option value="all">Show All</option>
        <option *ngFor="let artist of childArtistList"
        [value]="artist">{{ artist }}</option>
      </select>
    </div>
  </div>
  `
})

export class AlbumFilterComponent {
  @Input() childGenreList: String[];
  @Input() childArtistList: String[];
  @Output() genreSender = new EventEmitter();
  @Output() artistSender = new EventEmitter();

  genreChange(genreFromMenu: string) {
    var genreFilter: string = genreFromMenu;
    this.genreSender.emit(genreFilter);
  }

  artistChange(artistFromMenu: string) {
    var artistFilter: string = artistFromMenu;
    this.artistSender.emit(artistFilter);
  }
}
