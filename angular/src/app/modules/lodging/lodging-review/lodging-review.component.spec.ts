import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LodgingReviewComponent } from './lodging-review.component';

describe('LodgingReviewComponent', () => {
  let component: LodgingReviewComponent;
  let fixture: ComponentFixture<LodgingReviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LodgingReviewComponent ]
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
