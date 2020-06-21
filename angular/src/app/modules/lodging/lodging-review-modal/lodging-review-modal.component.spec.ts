import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LodgingReviewModalComponent } from './lodging-review-modal.component';

describe('LodgingReviewModalComponent', () => {
  let component: LodgingReviewModalComponent;
  let fixture: ComponentFixture<LodgingReviewModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LodgingReviewModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LodgingReviewModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should open and close modal', () => {
    component.openModal(null, null, null);
    expect(component.lodgingReviewModal.nativeElement.classList).toContain('is-active');

    component.closeModal(null);
    expect(component.lodgingReviewModal.nativeElement.classList).not.toContain('is-active');

    component.openModal(new MouseEvent('click'), null, null);
    component.closeModal(new MouseEvent('click'));
  });
});
