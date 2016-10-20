import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Album } from './album.model';

@Component({
  selector: 'add-review',
  template: `
  <div class="modal fade" id="addReview" tabindex="0" role="dialog" aria-labelledby="addReviewLabel">
    <div class="modal-dialog" role="document">
      <div *ngIf="childSelectedAlbum" class="modal-content">
        <div class="modal-header">
          <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
          <h4 class="modal-title">{{ "Review Album: " + childSelectedAlbum.name }}</h4>
        </div>
        <div class="modal-body">
          <textarea [(ngModel)]="childSelectedAlbum.review" type="text"></textarea>
        </div>
        <div class="modal-footer">
          <button class="btn" data-dismiss="modal">Close</button>
          <button class="btn" (click)="doneReviewing()">Submit</button>
        </div>
      </div>
    </div>
  </div>
  `
})

export class AddReviewComponent {
  @Input() childSelectedAlbum: Album;
  @Output() doneClickedSender = new EventEmitter();

  doneReviewing() {
    this.doneClickedSender.emit();
  }
}
