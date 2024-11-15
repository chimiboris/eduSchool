import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagePersonnelComponent } from './page-personnel.component';

describe('PagePersonnelComponent', () => {
  let component: PagePersonnelComponent;
  let fixture: ComponentFixture<PagePersonnelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PagePersonnelComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PagePersonnelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
