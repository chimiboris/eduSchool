import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NouveauEmargementComponent } from './nouveau-emargement.component';

describe('NouveauEmargementComponent', () => {
  let component: NouveauEmargementComponent;
  let fixture: ComponentFixture<NouveauEmargementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NouveauEmargementComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NouveauEmargementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
