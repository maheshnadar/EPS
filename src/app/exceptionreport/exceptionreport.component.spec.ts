import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExceptionreportComponent } from './exceptionreport.component';

describe('ExceptionreportComponent', () => {
  let component: ExceptionreportComponent;
  let fixture: ComponentFixture<ExceptionreportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExceptionreportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExceptionreportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
