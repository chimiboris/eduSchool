import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailSalleDeClasseComponent } from './detail-salle-de-classe.component';

describe('DetailSalleDeClasseComponent', () => {
  let component: DetailSalleDeClasseComponent;
  let fixture: ComponentFixture<DetailSalleDeClasseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DetailSalleDeClasseComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DetailSalleDeClasseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
