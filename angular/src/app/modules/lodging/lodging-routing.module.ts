import { LodgingSearchFormComponent } from './lodging-search-form/lodging-search-form.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LodgingComponent } from './lodging/lodging.component';
import { LodgingDetailComponent } from './lodging-detail/lodging-detail.component';

const routes: Routes = [{ component: LodgingComponent, path: '' },
                        { component: LodgingDetailComponent, path: 'detail' },
                        { component: LodgingSearchFormComponent, path: 'form' }
                       ];

@NgModule({
  declarations: [],
  exports: [RouterModule],
  imports: [RouterModule.forChild(routes)]
})
export class LodgingRoutingModule { }
