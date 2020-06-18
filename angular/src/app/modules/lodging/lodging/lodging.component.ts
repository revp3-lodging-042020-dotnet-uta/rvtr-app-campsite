import { LodgingService } from './../../../services/lodging/lodging.service';
import { Component, OnInit } from '@angular/core';
import { Lodging } from 'src/app/data/lodging.model';
import { HttpParams } from '@angular/common/http';
import { LodgingQueryParams } from '../@types/lodging-query-params';
import Limit = LodgingQueryParams.Limit;
import { FormGroup } from '@angular/forms';
import { LodgingSearchFormField } from '../lodging-search-form/lodging-search-form-field';

@Component({
  selector: 'uic-lodging',
  templateUrl: './lodging.component.html',
})
export class LodgingComponent implements OnInit {

  public lodgings: Lodging[];

  // Amount of lodgings to load at one time.
  private limit = 5;
  // Current offset for lodge pagination.
  private offset = 0;

  constructor(private lodgingService: LodgingService) { }

  ngOnInit(): void {
    this.loadLodgings();
  }

  loadLodgings() {
    let params = new HttpParams();
    params = params.set(Limit, '5');

    this.lodgingService.get(undefined, params).subscribe(response => {
      this.lodgings = response;
    });
  }

  nextPage() {}

  previousPage() {}

  onSearchSubmit(searchForm: FormGroup) {
    console.log(`location field = ${searchForm.get(LodgingSearchFormField.Location).value}`);
  }
}

