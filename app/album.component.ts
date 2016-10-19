import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Album } from './album.model';

@Component({
  selector: 'album-display',
  inputs: ['album'],
  template: `
   <div class="well">
    <img src="{{ album.image }}">
    <h3>{{ album.name }}</h3>
    <label>{{ album.artist }}</label>
    <br>
    <label>{{ album.genre }}</label>
    <br>
    <label>{{ "$" + album.price }}</label>
    <br>
    <button class="btn" (click)="buyAlbum">Add to Cart</button>
    <button class="btn" (click)="reviewAlbum">Review Album</button>
   </div>
  `
})

export class AlbumComponent {
  // @Input ???
  // @Output() clickSender = new EventEmitter();
  public album: Album;
}
