import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Album } from './album.model';
import { AlbumComponent } from './album.component';

@Component({
  selector: 'album-list',
  template: `
   <div *ngFor="let album of childAlbumList | filter:childSelectedGenre:childSelectedArtist">
      <album-display
      [album] = "album"
      (clickSenderBuy)="buyAlbum($event)"
      (clickSenderReview)="reviewAlbum($event)"
      ></album-display>
   </div>
  `
})

export class AlbumListComponent {
  @Input() childAlbumList: Album[];
  @Input() childGenreList: String[];
  @Input() childSelectedGenre: String;
  @Input() childSelectedArtist: String;
  @Output() clickSenderBuy = new EventEmitter();
  @Output() clickSenderReview = new EventEmitter();

  buyAlbum(albumToBuy: Album) {
    this.clickSenderBuy.emit(albumToBuy);
  }

  reviewAlbum(albumToReview: Album) {
    this.clickSenderReview.emit(albumToReview);
  }
}
