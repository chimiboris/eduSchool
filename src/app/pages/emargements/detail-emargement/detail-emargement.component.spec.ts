import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailEmargementComponent } from './detail-emargement.component';

describe('DetailEmargementComponent', () => {
  let component: DetailEmargementComponent;
  let fixture: ComponentFixture<DetailEmargementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DetailEmargementComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DetailEmargementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
