import { Component, Input, Output } from '@angular/core';
import { Album } from './album.model';
import { AlbumComponent } from './album.component';

@Component({
  selector: 'album-list',
  template: `
   <div *ngFor="let album of childAlbumList">
      <album-display
      [album] = "album"
      ></album-display>
   </div>
  `
})

export class AlbumListComponent {
  @Input() childAlbumList: Album[];
}
