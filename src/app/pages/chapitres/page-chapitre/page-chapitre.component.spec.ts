import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageChapitreComponent } from './page-chapitre.component';

describe('PageChapitreComponent', () => {
  let component: PageChapitreComponent;
  let fixture: ComponentFixture<PageChapitreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PageChapitreComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PageChapitreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
