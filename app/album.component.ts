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
          <h4 id="name">{{ album.name }}</h4>
          <span>{{ album.artist }}</span><br>
          <span>{{ album.genre }}</span><br>
          <span>{{ "$" + album.price + ".00" }}</span>
          <hr>
          <div class="buttons">
            <button class="btn" (click)="reviewAlbum(album)" data-target="#addReview" data-toggle="modal">Review Album</button>
            <button class="btn" (click)="buyAlbum(album)">Add to Cart</button>
          </div>
        </div>
        <add-review
        [childSelectedAlbum] = "childSelectedAlbum"
        (doneClickedSender) = "doneReviewing()"
        ></add-review>
      </div>
    </div>
  `
})

export class AlbumComponent {
  @Input() childSelectedAlbum: Album[];
  @Output() clickSenderBuy = new EventEmitter();
  @Output() clickSenderReview = new EventEmitter();
  @Output() doneClickedSender = new EventEmitter();
  public album: Album;

  buyAlbum(albumToBuy: Album) {
    this.clickSenderBuy.emit(albumToBuy);
  }

  reviewAlbum(albumToReview: Album) {
    this.clickSenderReview.emit(albumToReview);
  }

  doneReviewing() {
    this.doneClickedSender.emit();
  }

}
