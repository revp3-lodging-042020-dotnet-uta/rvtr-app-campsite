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
});
