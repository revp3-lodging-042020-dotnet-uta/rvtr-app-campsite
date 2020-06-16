import { LodgingService } from './../../../services/lodging/lodging.service';
import { Component, OnInit } from '@angular/core';
import { Lodging } from 'src/app/data/lodging.model';
import { HttpParams } from '@angular/common/http';
import { LodgingQueryParams } from '../types/lodging-query-params';

@Component({
  selector: 'uic-lodging',
  templateUrl: './lodging.component.html',
})
export class LodgingComponent implements OnInit {

  constructor(private lodgingService: LodgingService) {}

  ngOnInit(): void {}

  queryParamsSample(): void {
    let params = new HttpParams();
    params = params.set(LodgingQueryParams.Limit, '5');
    params = params.set(LodgingQueryParams.RatingAtLeast, '3');

    // use undefined to skip the optional 'id' parameter
    this.lodgingService.get(undefined, params).subscribe(_ => {});
  }

  Paginate(change: number): void {}
}
