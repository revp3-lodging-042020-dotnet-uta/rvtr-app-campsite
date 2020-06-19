import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LodgingComponent } from './lodging/lodging.component';
import { LodgingDisplayReviewComponent } from './lodging-display-review/lodging-display-review.component';
import { LodgingReviewListComponent } from './lodging-review-list/lodging-review-list.component';
import { LodgingReviewComponent } from './lodging-review/lodging-review.component';

const routes: Routes = [{ component: LodgingComponent, path: '' },
{ component: LodgingDisplayReviewComponent, path: 'review1' },
{ component: LodgingReviewListComponent, path: 'review2' },
{ component: LodgingReviewComponent, path: 'review3' }

];

@NgModule({
  declarations: [],
  exports: [RouterModule],
  imports: [RouterModule.forChild(routes)],
})
export class LodgingRoutingModule { }
