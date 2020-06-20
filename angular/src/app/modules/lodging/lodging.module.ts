import { LodgingAddReviewComponent } from './lodging-add-review/lodging-add-review.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { LodgingRoutingModule } from './lodging-routing.module';
import { LodgingComponent } from './lodging/lodging.component';
import { LodgingSearchFormComponent } from './lodging-search-form/lodging-search-form.component';
import { LodgingReviewListComponent } from './lodging-review-list/lodging-review-list.component';
import { LodgingReviewComponent } from './lodging-review/lodging-review.component';
import { LodgingReviewModalComponent } from './lodging-review-modal/lodging-review-modal.component';

@NgModule({
  declarations: [
    LodgingComponent,
    LodgingAddReviewComponent,
    LodgingSearchFormComponent,
    LodgingReviewComponent,
    LodgingReviewListComponent,
    LodgingReviewModalComponent,
  ],
  imports: [
    CommonModule,
    LodgingRoutingModule,
    ReactiveFormsModule,
  ]
})

export class LodgingModule { }
