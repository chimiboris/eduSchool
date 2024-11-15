import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NouveauPersonnelComponent } from './nouveau-personnel.component';

describe('NouveauPersonnelComponent', () => {
  let component: NouveauPersonnelComponent;
  let fixture: ComponentFixture<NouveauPersonnelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NouveauPersonnelComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NouveauPersonnelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
