import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CountreclamationComponent } from './countreclamation.component';

describe('CountreclamationComponent', () => {
  let component: CountreclamationComponent;
  let fixture: ComponentFixture<CountreclamationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CountreclamationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CountreclamationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
