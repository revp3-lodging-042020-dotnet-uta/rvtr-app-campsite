import { Component, OnInit, NgModule } from '@angular/core';
import { LodgingService } from './../../../services/lodging/lodging.service';
import { Lodging } from 'src/app/data/lodging.model';
import { HttpParams } from '@angular/common/http';
import { ReviewService } from './../../../services/lodging/review.service';
import { ReviewQueryParams } from '../@types/review-query-params';
import { Review } from 'src/app/data/review.model';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [CommonModule]
})

@Component({
  selector: 'uic-lodging-display-review',
  templateUrl: './lodging-display-review.component.html',
  styleUrls: ['./lodging-display-review.component.scss']
})
export class LodgingDisplayReviewComponent implements OnInit {

  constructor(private reviewService: ReviewService) { }

  ngOnInit(): void {

    this.queryParamsReview();
  }
  private reviews: Review[];

  queryParamsReview(): void {
    let params = new HttpParams();
    params = params.set(ReviewQueryParams.Limit, '5');
    params = params.set(ReviewQueryParams.Offset, '0');


    // use undefined to skip the optional 'id' parameter
    this.reviewService.get(undefined, params).subscribe(response => {
      this.reviews = response;
    });
  }
  //review get change the offset amount based on how many have loaded
  LoadMore(change: number): void {  //

    let params = new HttpParams();
    params = params.set(ReviewQueryParams.Limit, '5');
    //+ unary used instead of parseInt
    change += + params.get(ReviewQueryParams.Limit)

    params = params.set(ReviewQueryParams.Offset, change.toString());

    this.reviewService.get(undefined, params).subscribe(response => {
      this.reviews = response;
    });
  }


}
