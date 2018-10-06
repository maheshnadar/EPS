import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CashdispenseComponent } from './cashdispense.component';

describe('CashdispenseComponent', () => {
  let component: CashdispenseComponent;
  let fixture: ComponentFixture<CashdispenseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CashdispenseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CashdispenseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
