import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NouvelleObservationComponent } from './nouvelle-observation.component';

describe('NouvelleDisciplineComponent', () => {
  let component: NouvelleObservationComponent;
  let fixture: ComponentFixture<NouvelleObservationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NouvelleObservationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NouvelleObservationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
