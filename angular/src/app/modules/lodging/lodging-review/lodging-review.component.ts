import { Component, OnInit, Input } from '@angular/core';
import { Review } from 'src/app/data/review.model';

@Component({
  selector: 'uic-lodging-review',
  templateUrl: './lodging-review.component.html',
  styleUrls: ['./lodging-review.component.scss']
})
export class LodgingReviewComponent implements OnInit {

  @Input() review: Review;

  constructor() { }

  ngOnInit(): void {
  }

}
