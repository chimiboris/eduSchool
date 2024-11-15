import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NouveauChapitreComponent } from './nouveau-chapitre.component';

describe('NouveauChapitreComponent', () => {
  let component: NouveauChapitreComponent;
  let fixture: ComponentFixture<NouveauChapitreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NouveauChapitreComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NouveauChapitreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
