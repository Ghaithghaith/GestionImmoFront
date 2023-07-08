import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AjoutContratComponent } from './ajout-contrat.component';

describe('AjoutContratComponent', () => {
  let component: AjoutContratComponent;
  let fixture: ComponentFixture<AjoutContratComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AjoutContratComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AjoutContratComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
