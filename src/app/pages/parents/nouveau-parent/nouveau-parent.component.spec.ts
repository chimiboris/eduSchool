import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NouveauParentComponent } from './nouveau-parent.component';

describe('NouveauParentComponent', () => {
  let component: NouveauParentComponent;
  let fixture: ComponentFixture<NouveauParentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NouveauParentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NouveauParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
