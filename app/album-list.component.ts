import { Component, Input, Output } from '@angular/core';
import { Album } from './album.model';
import { AlbumComponent } from './album.component';

@Component({
  selector: 'album-list',
  template: `
   <div class="form-group well" *ngFor="let album of childAlbumList">
      <album-display
      [album] = "album"
      ></album-display>
      <button class="btn" (click)="buyAlbum">Add to Cart</button>
      <button class="btn" (click)="reviewAlbum">Review Album</button>
   </div>
  `
})

export class AlbumListComponent {
  @Input() childAlbumList: Album[];
  // @Output() clickSender = new EventEmitter();
}
