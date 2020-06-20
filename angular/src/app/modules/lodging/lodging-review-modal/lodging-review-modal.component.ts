import { Component, OnInit, ElementRef, ViewChild, Output, EventEmitter } from '@angular/core';
import { LodgingReviewListComponent } from '../lodging-review-list/lodging-review-list.component';

@Component({
  selector: 'uic-lodging-review-modal',
  templateUrl: './lodging-review-modal.component.html'
})
export class LodgingReviewModalComponent implements OnInit {

  @ViewChild('lodgingReviewModal') lodgingReviewModal: ElementRef;
  @ViewChild(LodgingReviewListComponent) lodgingReviewList: LodgingReviewListComponent;

  addingReview = false;

  constructor() { }

  ngOnInit(): void {
  }

  public openModal(event: MouseEvent, lodgeId: number): void {
    if (event) {
      event.stopPropagation();
    }
    this.lodgingReviewModal.nativeElement.classList.add('is-active');
    this.lodgingReviewList.reset();
    this.lodgingReviewList.setLodgeId(lodgeId);
    this.lodgingReviewList.loadReviews();
  }

  public closeModal(event?: MouseEvent): void {
    if (event) {
      event.stopPropagation();
    }
    this.lodgingReviewModal.nativeElement.classList.remove('is-active');
  }
}
