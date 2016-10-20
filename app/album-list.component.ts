import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Album } from './album.model';
import { AlbumComponent } from './album.component';

@Component({
  selector: 'album-list',
  template: `
   <div *ngFor="let album of childAlbumList | filter:childSelectedGenre:childSelectedArtist">
      <album-display
      [childSelectedAlbum] = "childSelectedAlbum"
      [album] = "album"
      (clickSenderBuy)="buyAlbum($event)"
      (clickSenderReview)="reviewAlbum($event)"
      (doneClickedSender) = "doneReviewing()"
      ></album-display>
   </div>
  `
})

export class AlbumListComponent {
  @Input() childSelectedAlbum: Album[];
  @Input() childAlbumList: Album[];
  @Input() childGenreList: String[];
  @Input() childSelectedGenre: String;
  @Input() childSelectedArtist: String;
  @Output() clickSenderBuy = new EventEmitter();
  @Output() clickSenderReview = new EventEmitter();
  @Output() doneClickedSender = new EventEmitter();

  buyAlbum(albumToBuy: Album) {
    this.clickSenderBuy.emit(albumToBuy);
  }

  reviewAlbum(albumToReview: Album) {
    this.clickSenderReview.emit(albumToReview);
  }

  doneReviewing(review) {
    this.doneClickedSender.emit();
  }
}
