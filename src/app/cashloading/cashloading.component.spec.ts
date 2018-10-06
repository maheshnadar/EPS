import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CashloadingComponent } from './cashloading.component';

describe('CashloadingComponent', () => {
  let component: CashloadingComponent;
  let fixture: ComponentFixture<CashloadingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CashloadingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CashloadingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
