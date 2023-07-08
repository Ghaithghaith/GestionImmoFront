import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchcontratComponent } from './searchcontrat.component';

describe('SearchcontratComponent', () => {
  let component: SearchcontratComponent;
  let fixture: ComponentFixture<SearchcontratComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchcontratComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchcontratComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
