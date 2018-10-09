import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Crac3rreportComponent } from './crac3rreport.component';

describe('Crac3rreportComponent', () => {
  let component: Crac3rreportComponent;
  let fixture: ComponentFixture<Crac3rreportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Crac3rreportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Crac3rreportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
