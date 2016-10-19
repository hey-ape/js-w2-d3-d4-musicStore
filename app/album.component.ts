import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Album } from './album.model';

@Component({
  selector: 'album-display',
  inputs: ['album'],
  template: `
    <div class="col-sm-4">
      <div class="thumbnail">
        <img src="{{ album.image }}">
        <div class="caption">
          <h4>{{ album.name }}</h4>
          <span>{{ album.artist }}</span><br>
          <span>{{ album.genre }}</span><br>
          <span>{{ "$" + album.price }}</span>
          <hr>
          <button class="btn" (click)="buyAlbum">Add to Cart</button>
          <button class="btn" (click)="reviewAlbum">Review Album</button>
        </div>
      </div>
    </div>
  `
})

export class AlbumComponent {
  // @Input ???
  // @Output() clickSender = new EventEmitter();
  public album: Album;
}
