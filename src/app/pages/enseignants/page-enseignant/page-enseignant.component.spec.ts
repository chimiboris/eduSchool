import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageEnseignantComponent } from './page-enseignant.component';

describe('PageEnseignantComponent', () => {
  let component: PageEnseignantComponent;
  let fixture: ComponentFixture<PageEnseignantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PageEnseignantComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PageEnseignantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
