import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NouvelleSalleDeClasseComponent } from './nouvelle-salle-de-classe.component';

describe('NouvelleSalleDeClasseComponent', () => {
  let component: NouvelleSalleDeClasseComponent;
  let fixture: ComponentFixture<NouvelleSalleDeClasseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NouvelleSalleDeClasseComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NouvelleSalleDeClasseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
