import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageCycleComponent } from './page-cycle.component';

describe('PageCycleComponent', () => {
  let component: PageCycleComponent;
  let fixture: ComponentFixture<PageCycleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PageCycleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PageCycleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
