import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NouveauEmploiDeTempsComponent } from './nouveau-emploi-de-temps.component';

describe('NouveauEmploiDeTempsComponent', () => {
  let component: NouveauEmploiDeTempsComponent;
  let fixture: ComponentFixture<NouveauEmploiDeTempsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NouveauEmploiDeTempsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NouveauEmploiDeTempsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
