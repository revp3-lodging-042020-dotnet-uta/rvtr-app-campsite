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

    // Disable body scrolling.
    //document.querySelector('html').classList.add('is-clipped');

    // Opens modal.
    this.lodgingReviewModal.nativeElement.classList.add('is-active');

    //this.newBookingForm();

    // Sets lodging property.
    //this.lodging = lodging;
  }

  /**
   * Hides the booking form modal.
   *
   * @param event Mouse event information. Used to stop propagation.
   */
  public closeModal(event?: MouseEvent): void {
    if (event) {
      event.stopPropagation();
    }

    // Enable body scrolling.
    //document.querySelector('html').classList.remove('is-clipped');

    this.lodgingReviewModal.nativeElement.classList.remove('is-active');
  }
}