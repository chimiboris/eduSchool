import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NouvelleLeconComponent } from './nouvelle-lecon.component';

describe('NouvelleLeconComponent', () => {
  let component: NouvelleLeconComponent;
  let fixture: ComponentFixture<NouvelleLeconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NouvelleLeconComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NouvelleLeconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
