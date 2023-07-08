import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SupprimerReclamationComponent } from './supprimer-reclamation.component';

describe('SupprimerReclamationComponent', () => {
  let component: SupprimerReclamationComponent;
  let fixture: ComponentFixture<SupprimerReclamationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SupprimerReclamationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SupprimerReclamationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
