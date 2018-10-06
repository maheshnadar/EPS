import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { C3rmisreportComponent } from './c3rmisreport.component';

describe('C3rmisreportComponent', () => {
  let component: C3rmisreportComponent;
  let fixture: ComponentFixture<C3rmisreportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ C3rmisreportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(C3rmisreportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
