import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageLeconComponent } from './page-lecon.component';

describe('PageLeconComponent', () => {
  let component: PageLeconComponent;
  let fixture: ComponentFixture<PageLeconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PageLeconComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PageLeconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
