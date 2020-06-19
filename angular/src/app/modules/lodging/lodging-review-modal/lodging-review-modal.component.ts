import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'uic-lodging-review-modal',
  templateUrl: './lodging-review-modal.component.html'
})
export class LodgingReviewModalComponent implements OnInit {

  // Element reference for the booking modal html element.
  @ViewChild('lodgingReviewModal') lodgingReviewModal: ElementRef;

  addingReview = false;

  constructor(private el: ElementRef) { }

  ngOnInit(): void {
  }

  public openModal(event: MouseEvent): void {
    if (event) {
      event.stopPropagation();
    }
    this.lodgingReviewModal.nativeElement.classList.add('is-active');
  }

  public closeModal(event?: MouseEvent): void {
    if (event) {
      event.stopPropagation();
    }
    this.lodgingReviewModal.nativeElement.classList.remove('is-active');
  }
}