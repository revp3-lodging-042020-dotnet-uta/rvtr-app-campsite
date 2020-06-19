import { Component, OnInit, NgModule } from '@angular/core';
import { LodgingService } from './../../../services/lodging/lodging.service';
import { Lodging } from 'src/app/data/lodging.model';
import { HttpParams } from '@angular/common/http';
import { ReviewService } from './../../../services/lodging/review.service';
import { ReviewQueryParams } from '../@types/review-query-params';
import { Review } from 'src/app/data/review.model';
import { CommonModule } from '@angular/common';
import { RouteConfigLoadEnd } from '@angular/router';



@Component({
  selector: 'uic-lodging-display-review',
  templateUrl: './lodging-display-review.component.html',
  styleUrls: ['./lodging-display-review.component.scss']
})
export class LodgingDisplayReviewComponent implements OnInit {

  public reviews: Review[] = [];
  private limit: number = 3;
  private offset: number = 0;
  public allReviewsLoaded = false;

  //totalLength: number = this.TotalLength();


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
      console.log("$current length: " + this.reviews.length);

      if (this.offset > this.reviews.length) {
        this.allReviewsLoaded = true;
        //this.reviews = [];
        //this.offset = 0;
      }

    });



  }

  /*
    LoadLess(): void {
  
      if (this.offset != 0) {
  
        this.reviews.splice(this.reviews.length - this.limit, this.limit);
        console.log(this.reviews.length);
        this.offset -= this.limit;
      }
    }
    */

  //if (this.Currentlength < this.totalLength - this.limit) { }  
  /*
  TotalLength(): number {
    this.reviewService.get(undefined, new HttpParams()).subscribe(response => {

      //this.reviews = this.reviews.concat(response);

      this.totalLength = response.length;
      console.log(this.totalLength);
    });


    return this.totalLength;
  }
  */
}





