import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Album } from './album.model';

@Component({
  selector: 'review-display',
  template: `
    <div *ngIf="!reviews[0]">
      <p class="text-center">No reviews to show.</p><hr>
    </div>
    <ul>
      <div id="reviews" class="row" *ngFor="let album of reviews">
        <li>
        <h5>{{ album.name + " (" + album.artist + ")" }}</h5>
        <p>{{ album.review }}</p>
        <hr>
        </li>
      </div>
    </ul>
  `
})

export class ReviewDisplayComponent {
  @Input() reviews: Album[];
}
