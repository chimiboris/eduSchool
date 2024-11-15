import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnseignantDetailAllComponent } from './enseignant-detail-all.component';

describe('EnseignantDetailAllComponent', () => {
  let component: EnseignantDetailAllComponent;
  let fixture: ComponentFixture<EnseignantDetailAllComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EnseignantDetailAllComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EnseignantDetailAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
