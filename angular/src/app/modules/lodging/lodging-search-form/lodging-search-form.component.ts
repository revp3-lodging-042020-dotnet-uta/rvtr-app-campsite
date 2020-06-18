import { Component, OnInit } from '@angular/core';
import { Lodging } from 'src/app/data/lodging.model';
import { LodgingSortKey } from '../@types/lodging-sort-key';
import { SortOrder } from '../@types/sort-order';

@Component({
  selector: 'uic-lodging-search-form',
  templateUrl: './lodging-search-form.component.html',
  styleUrls: ['./lodging-search-form.scss']
})
export class LodgingSearchFormComponent implements OnInit {

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

  constructor() {}

  ngOnInit(): void {}
}
