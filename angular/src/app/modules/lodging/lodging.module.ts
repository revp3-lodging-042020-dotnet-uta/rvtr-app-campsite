import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { LodgingRoutingModule } from './lodging-routing.module';
import { LodgingComponent } from './lodging/lodging.component';
import { LodgingDetailComponent } from './lodging-detail/lodging-detail.component';
import { LodgingSearchFormComponent } from './lodging-search-form/lodging-search-form.component';

@NgModule({
  declarations: [LodgingComponent, LodgingDetailComponent, LodgingSearchFormComponent],
  imports: [
    CommonModule,
    LodgingRoutingModule,
    ReactiveFormsModule,
  ]
})

export class LodgingModule { }
