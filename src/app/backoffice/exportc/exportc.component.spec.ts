import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExportcComponent } from './exportc.component';

describe('ExportcComponent', () => {
  let component: ExportcComponent;
  let fixture: ComponentFixture<ExportcComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExportcComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExportcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
