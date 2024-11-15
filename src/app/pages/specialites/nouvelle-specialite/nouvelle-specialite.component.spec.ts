import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NouvelleSpecialiteComponent } from './nouvelle-specialite.component';

describe('NouvelleSpecialiteComponent', () => {
  let component: NouvelleSpecialiteComponent;
  let fixture: ComponentFixture<NouvelleSpecialiteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NouvelleSpecialiteComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NouvelleSpecialiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
