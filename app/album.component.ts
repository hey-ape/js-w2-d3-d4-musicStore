import { Component, Input, Output } from '@angular/core';
import { Album } from './album.model';

@Component({
  selector: 'album-display',
  inputs: ['album'],
  template: `
   <div class="well">
    <h3>{{ album.name }}</h3>
   </div>
  `
})

export class AlbumComponent {
  public album: Album;
}
