import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Album } from './album.model';

@Component({
  selector: 'cart-display',
  template: `
    <ul *ngFor="let item of purchases">
      <li>{{item.name}} {{ "($" + item.price + ".00)" }}</li>
    </ul>
  `
})

export class CartComponent {
  @Input() purchases: Album[];
  // @Output() clickSender = new EventEmitter();
  // public album: Album;


}
