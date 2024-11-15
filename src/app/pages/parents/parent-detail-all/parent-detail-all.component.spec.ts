import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentDetailAllComponent } from './parent-detail-all.component';

describe('ParentDetailAllComponent', () => {
  let component: ParentDetailAllComponent;
  let fixture: ComponentFixture<ParentDetailAllComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ParentDetailAllComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ParentDetailAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
