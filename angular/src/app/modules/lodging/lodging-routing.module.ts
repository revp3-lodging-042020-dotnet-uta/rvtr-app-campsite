import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LodgingComponent } from './lodging/lodging.component';

import { LodgingSearchFormComponent } from './lodging-search-form/lodging-search-form.component';

const routes: Routes = [{ component: LodgingComponent, path: '' },
{ component: LodgingSearchFormComponent, path: 'search' }];


@NgModule({
  declarations: [],
  exports: [RouterModule],
  imports: [RouterModule.forChild(routes)],
})
export class LodgingRoutingModule { }
