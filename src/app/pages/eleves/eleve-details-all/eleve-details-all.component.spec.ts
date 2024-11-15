import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EleveDetailsAllComponent } from './eleve-details-all.component';

describe('EleveDetailsAllComponent', () => {
  let component: EleveDetailsAllComponent;
  let fixture: ComponentFixture<EleveDetailsAllComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EleveDetailsAllComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EleveDetailsAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
