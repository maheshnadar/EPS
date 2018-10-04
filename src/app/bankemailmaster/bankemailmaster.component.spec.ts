import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BankemailmasterComponent } from './bankemailmaster.component';

describe('BankemailmasterComponent', () => {
  let component: BankemailmasterComponent;
  let fixture: ComponentFixture<BankemailmasterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BankemailmasterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BankemailmasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
