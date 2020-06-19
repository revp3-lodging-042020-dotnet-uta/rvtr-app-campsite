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
  private limit: number = 3;
  private offset: number = 0;
  public allReviewsLoaded = false;

  constructor(private reviewService: ReviewService) { }

  ngOnInit(): void {
    this.LoadMore();
  }

  LoadMore(): void {
    let params = new HttpParams();
    params = params.set(ReviewQueryParams.Limit, this.limit.toString());
    params = params.set(ReviewQueryParams.Offset, this.offset.toString());

    this.reviewService.get(undefined, params).subscribe(response => {

      this.reviews = this.reviews.concat(response);

      this.offset += this.limit;
      //console.log("$current length: " + this.reviews.length);
      //console.log("$Offset index Position: " + this.offset);

      if (this.offset > this.reviews.length) {
        this.allReviewsLoaded = true;
        //this.reviews = [];
        //this.offset = 0;
      }

    });



  }

}
