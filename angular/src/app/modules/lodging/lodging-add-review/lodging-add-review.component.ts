import { Component, OnInit } from '@angular/core';
import { Lodging } from 'src/app/data/lodging.model';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { ReviewService } from './../../../services/lodging/review.service';
import { Review } from 'src/app/data/review.model';

@Component({
  selector: 'uic-add-review-lodging',
  templateUrl: './lodging-add-review.component.html',
})
export class LodgingAddReviewComponent implements OnInit {

  newReview: FormGroup;

  name: string;
  date;
  accountId;
  lodgingId;
  comment = new FormControl("", Validators.required);
  rating = new FormControl(Number,(Validators.required,Validators.max(10),Validators.min(0)));
  review: Review;
  constructor(formBuilder: FormBuilder,private reviewService:ReviewService) {
    this.newReview = formBuilder.group({
      "rating":this.rating,
      "comment": this.comment
    });
  }
  submitReview() {
    this.review.rating = this.rating.value;
    this.review.comment = this.comment.value;
    this.review.dateCreated = this.date;
    this.review.accountId = this.accountId;
    this.review.lodgingId = this.lodgingId;
    this.reviewService.post(this.review);
  }

  ngOnInit(): void {
    this.date = Date.now();
    this.name = "Anonymous";
  }
}
