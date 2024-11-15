import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailScolariteComponent } from './detail-scolarite.component';

describe('DetailScolariteComponent', () => {
  let component: DetailScolariteComponent;
  let fixture: ComponentFixture<DetailScolariteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DetailScolariteComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DetailScolariteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
