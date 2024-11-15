import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NouveauCoursComponent } from './nouveau-cours.component';

describe('NouveauCoursComponent', () => {
  let component: NouveauCoursComponent;
  let fixture: ComponentFixture<NouveauCoursComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NouveauCoursComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NouveauCoursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
