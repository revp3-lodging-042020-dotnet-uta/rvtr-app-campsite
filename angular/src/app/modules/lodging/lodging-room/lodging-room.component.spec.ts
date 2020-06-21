import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HttpClientTestingModule, } from '@angular/common/http/testing';
import { AccountService } from 'src/app/services/account/account.service';
import { HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Account } from 'src/app/data/account.model';
import { LodgingRoomComponent } from './lodging-room.component';

describe('LodgingRoomComponent', () => {
  let component: LodgingRoomComponent;
  let fixture: ComponentFixture<LodgingRoomComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LodgingRoomComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LodgingRoomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should get blanks up to 3 to fill amenities', () => {
    const Amenities = [
      [],
      [{blank: null}],
      [{blank: null}, {blank: null}],
      [{blank: null}, {blank: null}, {blank: null}]
    ];

    expect(component.countAmenities(Amenities[0])).toEqual(Amenities[3]);
    expect(component.countAmenities(Amenities[1])).toEqual(Amenities[2]);
    expect(component.countAmenities(Amenities[2])).toEqual(Amenities[1]);
    expect(component.countAmenities(Amenities[3])).toEqual(Amenities[0]);
  });

});
