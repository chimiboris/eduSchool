import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageSalleDeClasseComponent } from './page-salle-de-classe.component';

describe('PageSalleDeClasseComponent', () => {
  let component: PageSalleDeClasseComponent;
  let fixture: ComponentFixture<PageSalleDeClasseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PageSalleDeClasseComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PageSalleDeClasseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
