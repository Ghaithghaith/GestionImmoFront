import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SupprimerContratComponent } from './supprimer-contrat.component';

describe('SupprimerContratComponent', () => {
  let component: SupprimerContratComponent;
  let fixture: ComponentFixture<SupprimerContratComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SupprimerContratComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SupprimerContratComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
