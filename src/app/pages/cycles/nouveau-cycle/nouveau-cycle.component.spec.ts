import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NouveauCycleComponent } from './nouveau-cycle.component';

describe('NouveauCycleComponent', () => {
  let component: NouveauCycleComponent;
  let fixture: ComponentFixture<NouveauCycleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NouveauCycleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NouveauCycleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
