import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageEmploiDeTempsComponent } from './page-emploi-de-temps.component';

describe('PageEmploiDeTempsComponent', () => {
  let component: PageEmploiDeTempsComponent;
  let fixture: ComponentFixture<PageEmploiDeTempsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PageEmploiDeTempsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PageEmploiDeTempsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
