import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Album } from './album.model';

@Component({
  selector: 'album-display',
  inputs: ['album'],
  template: `
    <div class="col-sm-6">
      <div class="thumbnail">
        <img class="cover" src="{{ album.image }}">
        <div class="caption">
          <h4>{{ album.name }}</h4>
          <span>{{ album.artist }}</span><br>
          <span>{{ album.genre }}</span><br>
          <span>{{ "$" + album.price }}</span>
          <hr>
          <div class="buttons">
            <button class="btn" (click)="buyAlbum(album)">Add to Cart</button>
            <button class="btn" (click)="reviewAlbum(album)">Review Album</button>
          </div>
        </div>
      </div>
    </div>
  `
})

export class AlbumComponent {
  @Output() clickSender = new EventEmitter();
  public album: Album;

  buyAlbum(albumToBuy: Album) {
    this.clickSender.emit(albumToBuy);
  }

  reviewAlbum(albumToReview: Album) {
    this.clickSender.emit(albumToReview);
  }
}
