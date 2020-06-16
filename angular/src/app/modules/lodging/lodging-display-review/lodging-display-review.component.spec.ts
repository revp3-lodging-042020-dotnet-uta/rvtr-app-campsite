import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LodgingDisplayReviewComponent } from './lodging-display-review.component';

describe('LodgingDisplayReviewComponent', () => {
  let component: LodgingDisplayReviewComponent;
  let fixture: ComponentFixture<LodgingDisplayReviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LodgingDisplayReviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LodgingDisplayReviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
