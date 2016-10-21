import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Album } from './album.model';

@Component({
  selector: 'review-display',
  template: `
    <div *ngIf="!reviews[0]">
      <p class="text-center">No reviews to show.</p><hr>
    </div>
    <div id="reviews" class="row" *ngFor="let album of reviews">
      <div>
        <p id="review-text">{{ album.review }}</p>
        <h5>{{ album.name + " (" + album.artist + ")" }}</h5>
      </div>
      <hr>
    </div>
  `
})

export class ReviewDisplayComponent {
  @Input() reviews: Album[];
}
