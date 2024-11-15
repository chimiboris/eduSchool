import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NouveauNiveauComponent } from './nouveau-niveau.component';

describe('NouveauNiveauComponent', () => {
  let component: NouveauNiveauComponent;
  let fixture: ComponentFixture<NouveauNiveauComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NouveauNiveauComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NouveauNiveauComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
