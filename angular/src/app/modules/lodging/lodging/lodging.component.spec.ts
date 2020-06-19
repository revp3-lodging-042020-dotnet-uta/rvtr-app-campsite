import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { LodgingComponent } from './lodging.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { HttpParams } from '@angular/common/http';
import { LodgingQueryParams } from '../@types/lodging-query-params';
import { of } from 'rxjs';
import { Lodging } from 'src/app/data/lodging.model';
import { LodgingService } from 'src/app/services/lodging/lodging.service';

describe('LodgingComponent', () => {
  let component: LodgingComponent;
  let fixture: ComponentFixture<LodgingComponent>;

  const lodgingServiceMock = {
    get() {
      const lodges: Lodging[] = [{
        id: '0',
        location: {
          id: '1',
          address: {
            id: '1',
            city: 'city',
            country: 'country',
            postalCode: 'postal code',
            stateProvince: 'state',
            street: 'street',
          },
          latitude: 0,
          longitude: 1,
          locale: 'locale',
        },
        name: 'name',
        description: 'description',
        rentals: null,
        reviews: null,
        amenities: null,
        images: [
          { id: '1', image: 'image1' },
          { id: '2', image: 'image2' },
          { id: '3', image: 'image3' },
          { id: '4', image: 'image4' },
          { id: '5', image: 'image5' },
          { id: '6', image: 'image6' },
          { id: '7', image: 'image7' },
        ]
      }];
      return of( lodges );
    }
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [LodgingComponent],
      imports: [HttpClientTestingModule],
      providers: [{provide: LodgingService, useValue: lodgingServiceMock }]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LodgingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should run search submit', () => {
    expect(component.searchParams === new HttpParams());

    const sampleParams = new HttpParams();
    sampleParams.set('test', 'test');

    component.onSearchSubmit(sampleParams);

    expect(component.searchParams.get('test') === 'test');
  });

  it('should set search limit', () => {
    expect(component.searchParams === new HttpParams());

    component.setSearchLimit();

    expect(component.searchParams.get(LodgingQueryParams.Limit) === component.limit.toString());
  });

  it('should load lodgings', () => {
    fixture.detectChanges();
    component.loadLodgings();
    expect(component.lodgings.length).toEqual(1);
  });

});
