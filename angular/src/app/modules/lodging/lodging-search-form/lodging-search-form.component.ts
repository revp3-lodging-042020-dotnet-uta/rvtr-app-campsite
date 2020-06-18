import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Lodging } from 'src/app/data/lodging.model';
import { LodgingSortKey } from '../@types/lodging-sort-key';
import { SortOrder } from '../@types/sort-order';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'uic-lodging-search-form',
  templateUrl: './lodging-search-form.component.html',
  styleUrls: ['./lodging-search-form.scss']
})
export class LodgingSearchFormComponent implements OnInit {

  @Output() submitted = new EventEmitter<FormGroup>();

  public sortByFields: {name: string, value: LodgingSortKey }[] = [
    { name: 'Average rating', value: LodgingSortKey.ReviewAverageRating },
    { name: 'Number of reviews', value: LodgingSortKey.ReviewCount },
    { name: 'Number of beds', value: LodgingSortKey.Beds },
    { name: 'Number of baths', value: LodgingSortKey.Bathrooms },
    { name: 'Max occupancy', value: LodgingSortKey.Occupancy },
    { name: 'Name', value: LodgingSortKey.Name },
  ];

  public sortOrderFields: {name: string, value: SortOrder }[] = [
    { name: 'Descending', value: SortOrder.Descending },
    { name: 'Ascending', value: SortOrder.Ascending },
  ];

  searchForm = new FormGroup({
    location: new FormControl(''),
    beds: new FormControl(''),
    baths: new FormControl(''),
    rating: new FormControl(''),
    sortBy: new FormControl(LodgingSortKey.ReviewAverageRating),
    orderBy: new FormControl(SortOrder.Descending),
  });


  constructor() {}

  ngOnInit(): void {}

  onSubmit(): void {
    console.log('submitted form');
    this.submitted.emit(this.searchForm);
  }
}
