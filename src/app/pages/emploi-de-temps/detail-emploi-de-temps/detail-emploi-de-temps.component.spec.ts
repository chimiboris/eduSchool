import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailEmploiDeTempsComponent } from './detail-emploi-de-temps.component';

describe('DetailEmploiDeTempsComponent', () => {
  let component: DetailEmploiDeTempsComponent;
  let fixture: ComponentFixture<DetailEmploiDeTempsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DetailEmploiDeTempsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DetailEmploiDeTempsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
