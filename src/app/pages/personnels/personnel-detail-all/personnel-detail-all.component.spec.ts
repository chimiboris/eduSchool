import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonnelDetailAllComponent } from './personnel-detail-all.component';

describe('PersonnelDetailAllComponent', () => {
  let component: PersonnelDetailAllComponent;
  let fixture: ComponentFixture<PersonnelDetailAllComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PersonnelDetailAllComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PersonnelDetailAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
