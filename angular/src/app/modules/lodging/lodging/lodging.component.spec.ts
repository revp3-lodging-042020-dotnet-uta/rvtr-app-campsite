import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { LodgingComponent } from './lodging.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { HttpParams } from '@angular/common/http';

describe('LodgingComponent', () => {
  let component: LodgingComponent;
  let fixture: ComponentFixture<LodgingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [LodgingComponent],
      imports: [HttpClientTestingModule]
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
});
