import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchEleveComponent } from './search-eleve.component';

describe('SearchEleveComponent', () => {
  let component: SearchEleveComponent;
  let fixture: ComponentFixture<SearchEleveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SearchEleveComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SearchEleveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
