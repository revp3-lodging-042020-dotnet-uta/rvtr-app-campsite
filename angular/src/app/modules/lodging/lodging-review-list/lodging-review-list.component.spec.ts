import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LodgingReviewListComponent } from './lodging-review-list.component';

describe('LodgingReviewListComponent', () => {
  let component: LodgingReviewListComponent;
  let fixture: ComponentFixture<LodgingReviewListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LodgingReviewListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LodgingReviewListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
