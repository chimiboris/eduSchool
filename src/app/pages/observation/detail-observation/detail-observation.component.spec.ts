import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailObservationComponent } from './detail-observation.component';

describe('DetailObservationComponent', () => {
  let component: DetailObservationComponent;
  let fixture: ComponentFixture<DetailObservationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DetailObservationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DetailObservationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
