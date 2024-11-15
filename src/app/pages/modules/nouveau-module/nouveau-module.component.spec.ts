import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NouveauModuleComponent } from './nouveau-module.component';

describe('NouveauModuleComponent', () => {
  let component: NouveauModuleComponent;
  let fixture: ComponentFixture<NouveauModuleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NouveauModuleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NouveauModuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
