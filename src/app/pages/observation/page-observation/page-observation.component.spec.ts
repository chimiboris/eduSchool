import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageObservationComponent } from './page-observation.component';

describe('PageDisciplineComponent', () => {
  let component: PageObservationComponent;
  let fixture: ComponentFixture<PageObservationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PageObservationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PageObservationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
