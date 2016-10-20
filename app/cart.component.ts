import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Album } from './album.model';

@Component({
  selector: 'cart-display',
  template: `
    <ul *ngFor="let item of purchases">
      <li>
      <img (click)="removeAlbum(item)" id="remove" src="./../resources/images/remove.png">
      {{ item.name }} {{ "($" + item.price + ".00)" }}
      </li>
    </ul>
    <hr>
    <h4><strong>Total: {{ "$" + total + ".00" }}</strong></h4>
  `
})

export class CartComponent {
  @Input() purchases: Album[];
  @Input() total: number;
  @Output() clickSenderRemove = new EventEmitter();
  public album: Album;

  removeAlbum(albumToRemove: Album) {
    this.clickSenderRemove.emit(albumToRemove);
  }

}
