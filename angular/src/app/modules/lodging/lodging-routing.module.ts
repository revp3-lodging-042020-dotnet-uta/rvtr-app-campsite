import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LodgingComponent } from './lodging/lodging.component';
import { LodgingDisplayReviewComponent } from './lodging-display-review/lodging-display-review.component';

const routes: Routes = [{ component: LodgingComponent, path: '' },
{ component: LodgingDisplayReviewComponent, path: 'review' }
];

@NgModule({
  declarations: [],
  exports: [RouterModule],
  imports: [RouterModule.forChild(routes)],
})
export class LodgingRoutingModule { }
