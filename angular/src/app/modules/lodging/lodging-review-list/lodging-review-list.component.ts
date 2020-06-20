import { Component, OnInit } from '@angular/core';
import { Review } from 'src/app/data/review.model';
import { ReviewService } from 'src/app/services/lodging/review.service';
import { HttpParams } from '@angular/common/http';
import { ReviewQueryParams } from '../@types/review-query-params';

@Component({
  selector: 'uic-lodging-review-list',
  templateUrl: './lodging-review-list.component.html',
  styleUrls: ['./lodging-review-list.component.scss']
})
export class LodgingReviewListComponent implements OnInit {

  public reviews: Review[] = [];
  private limit = 3;
  private offset = 0;
  public allReviewsLoaded = false;

  constructor(private reviewService: ReviewService) { }

  ngOnInit(): void {
    this.loadMore();
  }

  loadMore(): void {
    let params = new HttpParams();
    params = params.set(ReviewQueryParams.Limit, this.limit.toString());
    params = params.set(ReviewQueryParams.Offset, this.offset.toString());

    this.reviewService.get(undefined, params).subscribe(response => {

      this.reviews = this.reviews.concat(response);

      this.offset += this.limit;

      if (this.offset > this.reviews.length) {
        this.allReviewsLoaded = true;
      }

    });



  }

}
