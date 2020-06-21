import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LodgingReviewComponent } from './lodging-review.component';
import {
  HttpClientTestingModule,
} from '@angular/common/http/testing';
import { AccountService } from 'src/app/services/account/account.service';

describe('LodgingReviewComponent', () => {
  let component: LodgingReviewComponent;
  let fixture: ComponentFixture<LodgingReviewComponent>;
  let accountService: AccountService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LodgingReviewComponent ],
      imports: [HttpClientTestingModule],
      providers: [{ provide: AccountService, useValue: accountService }],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LodgingReviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
