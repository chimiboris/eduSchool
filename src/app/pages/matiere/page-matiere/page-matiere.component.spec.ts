import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageMatiereComponent } from './page-matiere.component';

describe('PageMatiereComponent', () => {
  let component: PageMatiereComponent;
  let fixture: ComponentFixture<PageMatiereComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PageMatiereComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PageMatiereComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
