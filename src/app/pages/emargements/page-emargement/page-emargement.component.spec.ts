import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageEmargementComponent } from './page-emargement.component';

describe('PageEmargementComponent', () => {
  let component: PageEmargementComponent;
  let fixture: ComponentFixture<PageEmargementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PageEmargementComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PageEmargementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
