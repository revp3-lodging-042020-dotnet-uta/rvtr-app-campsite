import { LodgingSearchFormComponent } from './../lodging-search-form/lodging-search-form.component';
import { Component, OnInit } from '@angular/core';
import { Lodging } from 'src/app/data/lodging.model';

@Component({
  selector: 'uic-lodging',
  templateUrl: './lodging-detail.component.html'
})
export class LodgingDetailComponent implements OnInit {

  lodging: Lodging[] = [
    {
      id: 'lodging-id-123',
      location: {
        id: 'location-id-123',
        address: {
          id: 'address-id-123',
          city: 'sample city',
          country: 'sample country',
          postalCode: '99999',
          stateProvince: 'XX',
          street: 'sample street 123',
        },
        latitude: '12.123456',
        locale: 'locale name',
        longitude: '98.765432',
      },
      name: 'lodging name',
      rentals: [
        {
          id: 'rental-id-123',
          name: 'rental name',
          rentalUnit: {
            id: 'rental-unit-id-123',
            bathrooms: [
              {
                id: 'bathrooms-id-123',
                fixture: 2,
              }
            ],
            bedrooms: [
              {
                id: 'bedrooms-id-123',
                count: 2,
                type: 'bedroom type',
              }
            ],
            name: 'rental unit name',
            occupancy: 4,
            type: 'rental unit type',
          }
        }
      ],
      reviews: [
        {
          id: 'review-id-123',
          accountId: 'account-id-123',
          hotelId: 'hotel-id-123',
          comment: 'review comment',
          dateCreated: new Date(),
          rating: 3,
        }
      ]
    }
  ];


  constructor() {}

  ngOnInit(): void {}
}
