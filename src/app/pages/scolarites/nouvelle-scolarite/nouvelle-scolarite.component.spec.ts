import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NouvelleScolariteComponent } from './nouvelle-scolarite.component';

describe('NouvelleScolariteComponent', () => {
  let component: NouvelleScolariteComponent;
  let fixture: ComponentFixture<NouvelleScolariteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NouvelleScolariteComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NouvelleScolariteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
