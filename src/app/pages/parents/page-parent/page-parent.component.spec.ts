import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageParentComponent } from './page-parent.component';

describe('PageParentComponent', () => {
  let component: PageParentComponent;
  let fixture: ComponentFixture<PageParentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PageParentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PageParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
