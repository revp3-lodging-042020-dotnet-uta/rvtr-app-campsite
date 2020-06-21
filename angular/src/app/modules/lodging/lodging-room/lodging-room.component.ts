import { Component, OnInit, Input } from '@angular/core';
import { Bedroom } from '../../../data/bedroom.model';

@Component({
  selector: 'uic-lodging-room',
  templateUrl: './lodging-room.component.html'
})
export class LodgingRoomComponent implements OnInit {

  @Input() room: Bedroom;

  constructor() { }

  ngOnInit(): void {
  }

  getIconName(amenity: string): string {
    if (amenity === 'Pool') {
      return 'swimmer';
    }
    else {
      return amenity.toLowerCase();
    }
  }

  countAmenities(amenities: object): object {
    if (Object.keys(amenities).length >= 3) {
      return [];
    }
    else if (Object.keys(amenities).length === 2) {
      return [
        { blank: null }
      ];
    }
    else if (Object.keys(amenities).length === 1) {
      return [
        { blank: null },
        { blank: null }
      ];
    }
    else {
      return [
        { blank: null },
        { blank: null },
        { blank: null }
      ];
    }
  }
}
