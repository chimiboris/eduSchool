import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailLeconComponent } from './detail-lecon.component';

describe('DetailLeconComponent', () => {
  let component: DetailLeconComponent;
  let fixture: ComponentFixture<DetailLeconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DetailLeconComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DetailLeconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
