import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Bankc3rreporttemplateComponent } from './bankc3rreporttemplate.component';

describe('Bankc3rreporttemplateComponent', () => {
  let component: Bankc3rreporttemplateComponent;
  let fixture: ComponentFixture<Bankc3rreporttemplateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Bankc3rreporttemplateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Bankc3rreporttemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
